'use strict'

const Schema = use('Schema')

class DishSchema extends Schema {
  up () {
    this.create('dishes', (table) => {
      table.increments('id')
      table.string('img')
      table.string('name').notNullable()
      table.integer('category_id').unsigned().references('id').inTable('categories')
      table.decimal('price').notNullable()
      table.string('description').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('dishes')
  }
}

module.exports = DishSchema
