'use strict'
const fs = use('fs')
const Helpers = use('Helpers');
const AppService = use('App/Services/AppService')
const AppException = use('App/Exceptions/AppException')

class DishService extends AppService {
  constructor(dishRepository, categoryRepository, ingredientRepository, dishIngredientRepository) {
    super(dishRepository)
    this.categoryRepository = categoryRepository
    this.ingredientRepository = ingredientRepository
    this.dishIngredientRepository = dishIngredientRepository 
  }

  async handleIngredients(ingredients, dish) {
    await this.dishIngredientRepository.deleteByDish(dish.id)
    ingredients = [...new Set(ingredients.map(ingredient =>  ingredient = ingredient.toLowerCase()))]
    const checkIngredientsPromises = ingredients.map(async (ingredient) => {
      const find = await this.ingredientRepository.findByName(ingredient)
      let ingredient_id
      if(find) {
        ingredient_id = find.id
      } else {
        const newIngredient = await this.ingredientRepository.create({ name: ingredient })
        ingredient_id = newIngredient.id
      }
      
      await this.dishIngredientRepository.create({ dish_id: dish.id, ingredient_id })
    })

    await Promise.all(checkIngredientsPromises)
    return ingredients
  }

  async validateFields({name, category_id, price, description, ingredients}, dishId = null) {
    if(!name || !category_id || !price || !description || !ingredients || ingredients.length === 0) {
      throw new AppException('Required fields not informed', 400)
    }

    const dishByName = await this.repository.findByName(name)
    if(dishByName && Number(dishByName.id) !== Number(dishId)) {
      throw new AppException('Dish already registered', 400)
    }

    const isValidCategory = await this.categoryRepository.findById(category_id)
    if(!isValidCategory) {
      throw new AppException('Invalid category', 400)
    }
  }

  async create({name, category_id, price, description, ingredients}) {
    await this.validateFields({name, category_id, price, description, ingredients})
    const dish = await this.repository.create({name, category_id, price, description})
    ingredients = await this.handleIngredients(ingredients, dish)
    dish.ingredients = ingredients
    return dish
  }

  async update(dishId, {name, category_id, price, description, ingredients}) {
    const dish = await this.repository.findById(dishId)
    if(!dish) {
      throw new AppException('Not found', 404)
    }
    await this.validateFields({name, category_id, price, description, ingredients}, dishId)

    dish.merge({name, category_id, price, description})
    await this.repository.update(dish)
    ingredients = await this.handleIngredients(ingredients, dish)
    dish.ingredients = ingredients
    return dish
  }

  async updatePhoto(dishId, photo) {
    const dish = await this.repository.findById(dishId)
    if(!dish) {
      throw new AppException('Not found', 404)
    }

    if(!photo) {
      throw new AppException('Invalid photo', 400)
    }

    if(dish.photo) {
      const photoPath = Helpers.publicPath(`uploads/${dish.photo}`)
      if(fs.existsSync(photoPath)) {
        fs.unlinkSync(photoPath)
      }
    }

    const fileName = `${new Date().getTime()}.${photo.subtype}`
    await photo.move(Helpers.publicPath('uploads'), {
      name: fileName,
      overwrite: true
    })

    if(!photo.moved()) {
      throw AppException(photo.error(), 400)
    }

    dish.photo = `${fileName}`
    await this.repository.update(dish)
  }

  async delete(dishId) {
    const dish = await this.repository.findById(dishId)
    if(!dish) {
      throw new AppException('Not found', 404)
    }

    dish.active = false 
    this.repository.delete(dish)
  }
}

module.exports = DishService