'use strict'
const PgRepository = use('App/Repositories/PgRepository')
const DishIngredient = use('App/Models/DishIngredient')

class DishIngredientRepository extends PgRepository {
  async destroyByDish(dishId) {
    await this.model
      .query()
      .where('dish_id', dishId)
      .delete()
  }
}

module.exports = new DishIngredientRepository(DishIngredient)