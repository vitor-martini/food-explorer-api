'use strict'
const PgRepository = use('App/Repositories/PgRepository')
const Dish = use('App/Models/Dish')

class DishRepository extends PgRepository{
  async destroy(dish) {
    await dish.save()
    return dish 
  }

  async fetch(filters) {
    let query = this.model.query().where('active', true)

    if(filters.name) {
      const searchName = filters.name.toLowerCase()
      query = query.whereRaw('LOWER(name) LIKE ?', [`%${searchName}%`])
        .orWhereHas('ingredients', (builder) => {
          builder.whereRaw('LOWER(name) LIKE ?', [`%${searchName}%`])
        })
    }

    if(filters.category) {
      const searchCategory = filters.category.toLowerCase() 
      query = query.whereHas('category', (builder) => {
        builder.whereRaw('LOWER(name) LIKE ?', [`%${searchCategory}%`])
      })
    }
 
    const dishes = await query.with('ingredients').with('category').fetch()
    return dishes
  }

  async getByName(name) {
    return this.model.query()
      .whereRaw('LOWER(name) = ?', name.toLowerCase())
      .first()
  }

  async getById(id) {
    const dish = await this.model.query()
      .where('id', id)
      .with('ingredients')
      .with('category')
      .first()

    return dish
  }
}

module.exports = new DishRepository(Dish)