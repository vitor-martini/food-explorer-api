'use strict'
const PgRepository = use('App/Repositories/PgRepository')
const Favorite = use('App/Models/Favorites')

class FavoriteRepository extends PgRepository {
  
}

module.exports = new FavoriteRepository(Favorite)