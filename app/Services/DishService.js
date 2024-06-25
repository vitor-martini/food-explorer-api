'use strict'
const fs = use('fs')
const Database = use('Database')
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

  async destroy(dishId) {
    const dish = await this.repository.findById(dishId)
    if(!dish) {
      throw new AppException('Not found', 404)
    }

    dish.active = false 
    this.repository.destroy(dish)
  }

  async fetch(filters) {
    return await this.repository.fetch(filters)
  }

  async getById(id) {
    return this.repository.getById(id)
  }

  async handleIngredients(ingredients, dish, trx) {
    await this.dishIngredientRepository.destroyByDish(dish.id)
    ingredients = [...new Set(ingredients.map(ingredient =>  ingredient = ingredient.toLowerCase()))]

    const ingredientIds = await Promise.all(ingredients.map(async (ingredient) => {
      const existingIngredient = await this.ingredientRepository.getByName(ingredient)
      if (existingIngredient) {
        return existingIngredient.id
      } 
      
      const newIngredient = await this.ingredientRepository.store({ name: ingredient }, trx)
      return newIngredient.id
    }))

    await dish.ingredients().attach(ingredientIds, null, trx)
    return ingredients
  }

  async store({name, category_id, price, description, ingredients}) {
    await this.validateFields({name, category_id, price, description, ingredients})

    const trx = await Database.beginTransaction()

    try {
      const dish = await this.repository.store({name, category_id, price, description}, trx)
      ingredients = await this.handleIngredients(ingredients, dish, trx)
      dish.ingredients = ingredients
      await trx.commit()
      
      return dish
    } catch (error) {
      await trx.rollback()
      throw error
    }
  }

  async update(dishId, {name, category_id, price, description, ingredients}) {
    const dish = await this.repository.findById(dishId)
    if(!dish) {
      throw new AppException('Not found', 404)
    }
    await this.validateFields({name, category_id, price, description, ingredients}, dishId)

    const trx = await Database.beginTransaction()
    try {
      dish.merge({name, category_id, price, description})
      await this.repository.update(dish, trx)
      ingredients = await this.handleIngredients(ingredients, dish, trx)
      dish.ingredients = ingredients
      await trx.commit()
      
      return dish
    } catch(error) {
      await trx.rollback()
      throw error
    }
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

  async validateFields({name, category_id, price, description, ingredients}, dishId = null) {
    if(!name || !category_id || !price || !description || !ingredients || ingredients.length === 0) {
      throw new AppException('Required fields not informed', 400)
    }

    const dishByName = await this.repository.getByName(name)
    if(dishByName && Number(dishByName.id) !== Number(dishId)) {
      throw new AppException('Dish already registered', 400)
    }

    const isValidCategory = await this.categoryRepository.findById(category_id)
    if(!isValidCategory) {
      throw new AppException('Invalid category', 400)
    }
  }
}

module.exports = DishService