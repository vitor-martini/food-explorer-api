'use strict'

const { ServiceProvider } = require('@adonisjs/fold')

class FavoriteServiceProvider extends ServiceProvider {
  register() {
    this.app.singleton('App/Services/FavoriteService', (app) => {
      const favoriteRepository = app.use('App/Repositories/FavoriteRepository')
      const dishRepository = app.use('App/Repositories/DishRepository')
      const FavoriteService = require('../Services/FavoriteService')
      return new FavoriteService(favoriteRepository, dishRepository)
    })
  }
}

module.exports = FavoriteServiceProvider