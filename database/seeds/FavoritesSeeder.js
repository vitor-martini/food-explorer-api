'use strict'

const Favorite = use('App/Models/Favorite')

class FavoritesSeeder {
  async run () {
    await Favorite.createMany([
      { dish_id: 1, user_id: 1 }, 
      { dish_id: 2, user_id: 1 }, 
      { dish_id: 3, user_id: 1 }, 
      { dish_id: 4, user_id: 1 }, 
      { dish_id: 5, user_id: 1 }  
    ])
  }
}

module.exports = FavoritesSeeder
