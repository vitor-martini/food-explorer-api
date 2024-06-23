'use strict'

const AppService = use('App/Services/AppService')
const AppException = use('App/Exceptions/AppException')

class DishService extends AppService {
  constructor(dishRepository, categoryRepository, ingredientRepository, dishIngredientRepository) {
    super(dishRepository)
    this.categoryRepository = categoryRepository
    this.ingredientRepository = ingredientRepository
    this.dishIngredientRepository = dishIngredientRepository 
  }

  async create({name, category_id, price, description, ingredients}) {
    if(!name || !category_id || !price || !description || !ingredients || ingredients.length === 0) {
      throw new AppException('Required fields not informed', 400)
    }

    const isNameAlreadyInUse = await this.repository.findByName(name)
    if(isNameAlreadyInUse) {
      throw new AppException('Dish already registered', 400)
    }

    const isValidCategory = await this.categoryRepository.findById(category_id)
    if(!isValidCategory) {
      throw new AppException('Invalid category', 400)
    }
    
    const dish = await this.repository.create({name, category_id, price, description})

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
    dish.ingredients = ingredients

    return dish
  }
}

module.exports = DishService