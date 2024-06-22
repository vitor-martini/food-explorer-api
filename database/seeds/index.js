'use strict'

const CategorySeeder = use('./CategorySeeder')
const StatusSeeder = use('./StatusSeeder')
const UserSeeder = use('./UserSeeder')
const IngredientSeeder = use('./IngredientSeeder')
const DishSeeder = use('./DishSeeder')
const OrderSeeder = use('./OrderSeeder')
const OrderDishSeeder = use('./OrderDishSeeder')
const FavoritesSeeder = use('./FavoritesSeeder')

class DatabaseSeeder {
  async run () {
    await new CategorySeeder().run()
    await new StatusSeeder().run()
    await new UserSeeder().run()
    await new IngredientSeeder().run()
    await new DishSeeder().run()
    await new OrderSeeder().run()
    await new OrderDishSeeder().run()
    await new FavoritesSeeder().run()
  }
}

module.exports = DatabaseSeeder
