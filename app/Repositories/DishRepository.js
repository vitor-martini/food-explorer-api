'use strict'
const PgRepository = use('App/Repositories/PgRepository')
const Dish = use('App/Models/Dish')

class DishRepository extends PgRepository{
}

module.exports = new DishRepository(Dish)