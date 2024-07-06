'use strict'

const { ServiceProvider } = require('@adonisjs/fold')

class CategoryServiceProvider extends ServiceProvider {
  register() {
    this.app.singleton('App/Services/CategoryService', (app) => {
      const categoryRepository = app.use('App/Repositories/CategoryRepository')
      const CategoryService = require('../Services/CategoryService') 

      return new CategoryService(categoryRepository)
    })
  }
}

module.exports = CategoryServiceProvider
