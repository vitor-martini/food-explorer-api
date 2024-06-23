'use strict'

const { ServiceProvider } = require('@adonisjs/fold')

class DishServiceProvider extends ServiceProvider {
  register() {
    this.app.singleton('App/Services/DishService', (app) => {
      const dishRepository = app.use('App/Repositories/DishRepository')
      const categoryRepository = app.use('App/Repositories/CategoryRepository')
      const ingredientRepository = app.use('App/Repositories/IngredientRepository')
      const dishIngredientRepository = app.use('App/Repositories/DishIngredientRepository')
      const DishService = require('../Services/DishService') 

      return new DishService(dishRepository, categoryRepository, ingredientRepository, dishIngredientRepository)
    })
  }
}

module.exports = DishServiceProvider
