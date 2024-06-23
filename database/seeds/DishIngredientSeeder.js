'use strict'

const DishIngredient = use('App/Models/DishIngredient')

class DishIngredientSeeder {
  async run () {
    await DishIngredient.createMany([
      { dish_id: 1, ingredient_id: 1 }, 
      { dish_id: 1, ingredient_id: 2 }, 
      { dish_id: 1, ingredient_id: 3 }, 
      { dish_id: 1, ingredient_id: 30 }, 
      { dish_id: 1, ingredient_id: 25 }, 
      { dish_id: 2, ingredient_id: 30 }, 
      { dish_id: 2, ingredient_id: 6 }, 
      { dish_id: 2, ingredient_id: 3 }, 
      { dish_id: 2, ingredient_id: 2 }, 
      { dish_id: 3, ingredient_id: 33 }, 
      { dish_id: 3, ingredient_id: 3 }, 
      { dish_id: 3, ingredient_id: 2 }, 
      { dish_id: 3, ingredient_id: 1 }, 
      { dish_id: 3, ingredient_id: 4 }, 
      { dish_id: 4, ingredient_id: 30 }, 
      { dish_id: 4, ingredient_id: 38 }, 
      { dish_id: 4, ingredient_id: 3 }, 
      { dish_id: 5, ingredient_id: 31 }, 
      { dish_id: 5, ingredient_id: 3 }, 
      { dish_id: 5, ingredient_id: 40 }, 
      { dish_id: 6, ingredient_id: 38 }, 
      { dish_id: 6, ingredient_id: 41 }, 
      { dish_id: 6, ingredient_id: 40 }, 
      { dish_id: 7, ingredient_id: 30 }, 
      { dish_id: 7, ingredient_id: 38 }, 
      { dish_id: 7, ingredient_id: 3 }, 
      { dish_id: 8, ingredient_id: 30 }, 
      { dish_id: 8, ingredient_id: 3 }, 
      { dish_id: 8, ingredient_id: 2 }, 
      { dish_id: 9, ingredient_id: 29 }, 
      { dish_id: 9, ingredient_id: 44 }, 
      { dish_id: 10, ingredient_id: 42 }, 
      { dish_id: 10, ingredient_id: 43 }, 
      { dish_id: 11, ingredient_id: 42 }, 
      { dish_id: 11, ingredient_id: 40 }, 
      { dish_id: 11, ingredient_id: 45 }, 
      { dish_id: 12, ingredient_id: 40 }, 
      { dish_id: 12, ingredient_id: 46 }, 
      { dish_id: 13, ingredient_id: 46 }, 
      { dish_id: 13, ingredient_id: 45 }, 
      { dish_id: 14, ingredient_id: 45 },
      { dish_id: 14, ingredient_id: 47 }, 
      { dish_id: 15, ingredient_id: 48 }, 
      { dish_id: 15, ingredient_id: 40 }, 
      { dish_id: 15, ingredient_id: 45 }, 
      { dish_id: 16, ingredient_id: 49 }, 
      { dish_id: 17, ingredient_id: 48 }, 
      { dish_id: 18, ingredient_id: 48 }, 
      { dish_id: 19, ingredient_id: 48 },
      { dish_id: 19, ingredient_id: 48 }, 
      { dish_id: 20, ingredient_id: 46 } 
    ])
  }
}

module.exports = DishIngredientSeeder
