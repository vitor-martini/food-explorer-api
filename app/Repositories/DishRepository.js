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

  async getById(id) {
    const dish = await this.model.query()
      .where('id', id)
      .with('ingredients')
      .with('category')
      .firstOrFail()

    return dish
  }
}

module.exports = new DishRepository(Dish)