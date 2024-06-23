'use strict'

const Schema = use('Schema')

class IngredientSchema extends Schema {
  up () {
    this.create('ingredients', (table) => {
      table.increments('id')
      table.string('name', 200).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('ingredients')
  }
}

module.exports = IngredientSchema
