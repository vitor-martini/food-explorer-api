'use strict'
const PgRepository = use('App/Repositories/PgRepository')
const DishIngredient = use('App/Models/DishIngredient')

class DishIngredientRepository extends PgRepository {
}

module.exports = new DishIngredientRepository(DishIngredient)