'use strict'
const PgRepository = use('App/Repositories/PgRepository')
const Dish = use('App/Models/Dish')

class DishRepository extends PgRepository{
  async findByName(name) {
    return this.model.query()
      .whereRaw('LOWER(name) = ?', name.toLowerCase())
      .first()
  }

  async delete(dish) {
    await dish.save()
    return dish 
  }
}

module.exports = new DishRepository(Dish)