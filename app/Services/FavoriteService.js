'use strict'
const AppService = use('App/Services/AppService')
const AppException = use('App/Exceptions/AppException')

class FavoriteService  extends AppService{
  constructor(favoriteRepository, dishRepository) {
    super(favoriteRepository)
    this.dishRepository = dishRepository
  }

  async destroy({ dishId, userId }) {
    await this.validate(dishId)

    const favorite = await this.repository.getFavorite(dishId, userId)
    if(!favorite) {
      throw new AppException('This dish is not in favorite', 400)
    } 

    return await favorite.delete()
  }

  async index(userId) {
    return await this.repository.getFavorites(userId)
  }

  async show(userId, dishId) {
    return await this.repository.getFavoritesByDish(userId, dishId);
  }

  async store({ dishId, userId }) {
    await this.validate(dishId)

    const alreadyFavorite = await this.repository.getFavorite(dishId, userId)
    if(alreadyFavorite) {
      throw new AppException('Dish is already favorite', 400)
    }

    return await this.repository.store({ dish_id: dishId, user_id: userId })
  }

  async validate(dishId) {
    if(!dishId) {
      throw new AppException('Must inform a dish Id', 400)
    }

    const dish = await this.dishRepository.getById(dishId)
    if(!dish) {
      throw new AppException('Invalid dish', 400)
    }
  }
}

module.exports = FavoriteService