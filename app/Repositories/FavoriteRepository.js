'use strict'
const PgRepository = use('App/Repositories/PgRepository')
const Favorite = use('App/Models/Favorite')

class FavoriteRepository extends PgRepository {
  async getFavorite(dishId, userId) {
    const favorite = await this.model.query()
      .where({ dish_id: dishId, user_id: userId })
      .first()
  
    return favorite
  }

  async getFavorites(userId) {
    const favorites = await this.model.query()
      .where({ user_id: userId})
      .with('dishes')
      .fetch()

    return favorites
  }
}


module.exports = new FavoriteRepository(Favorite)