'use strict'

const FavoriteService = use('App/Services/FavoriteService')

class FavoriteController {
  constructor() {
    this.favoriteService = FavoriteService 
  }

  async destroy({ auth, request, response }) {
    const { dish_id: dishId } = request.only(['dish_id'])
    const requestUser = await auth.getUser()
    await this.favoriteService.destroy({ dishId, userId: requestUser.id })

    return response.status(200).json()
  }

  async index({ auth, response }) {
    const requestUser = await auth.getUser()
    const favorites = await this.favoriteService.index(requestUser.id)
    return response.status(200).json(favorites)
  }

  async show({ auth, params, response }) {
    const requestUser = await auth.getUser()
    const favorites = await this.favoriteService.show(requestUser.id, params.dish_id)
    return response.status(200).json(favorites)
  }

  async store({ auth, request, response }) {
    const { dish_id: dishId } = request.only(['dish_id'])
    const requestUser = await auth.getUser()
    await this.favoriteService.store({ dishId, userId: requestUser.id })

    return response.status(200).json()
  }
}

module.exports = FavoriteController