'use strict'
const PgRepository = use('App/Repositories/PgRepository')
const Category = use('App/Models/Category')

class CategoryRepository extends PgRepository {
}

module.exports = new CategoryRepository(Category)
