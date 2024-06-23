'use strict'
const PgRepository = use('App/Repositories/PgRepository')
const Ingredient = use('App/Models/Ingredient')

class IngredientRepository extends PgRepository {
  async findByName(name) {
    return this.model.query()
      .whereRaw('LOWER(name) = ?', name.toLowerCase())
      .first()
  }
}

module.exports = new IngredientRepository(Ingredient)