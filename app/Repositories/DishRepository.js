'use strict'
const PgRepository = use('App/Repositories/PgRepository')
const Dish = use('App/Models/Dish')

class DishRepository extends PgRepository{
  async findByName(name) {
    return await this.model.findBy('name', name)
  }
}

module.exports = new DishRepository(Dish)