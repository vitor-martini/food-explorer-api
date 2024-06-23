'use strict'

const { ServiceProvider } = require('@adonisjs/fold')

class DishServiceProvider extends ServiceProvider {
  register() {
    this.app.singleton('App/Services/DishService', (app) => {
      const DishRepository = app.use('App/Repositories/DishRepository')
      const CategoryRepository = app.use('App/Repositories/CategoryRepository')
      const IngredientRepository = app.use('App/Repositories/IngredientRepository')
      const DishIngredientRepository = app.use('App/Repositories/DishIngredientRepository')
      const DishService = require('../Services/DishService') 

      return new DishService(DishRepository, CategoryRepository, IngredientRepository, DishIngredientRepository)
    })
  }
}

module.exports = DishServiceProvider
