'use strict'

const Category = use('App/Models/Category')

class CategorySeeder {
  async run () {
    await Category.createMany([
      { name: 'Refeições' },
      { name: 'Sobremesas' },
      { name: 'Bebidas' },
    ])
  } 
}

module.exports = CategorySeeder
