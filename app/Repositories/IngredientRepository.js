'use strict'
const PgRepository = use('App/Repositories/PgRepository')
const Ingredient = use('App/Models/Ingredient')

class IngredientRepository extends PgRepository {
}

module.exports = new IngredientRepository(Ingredient)