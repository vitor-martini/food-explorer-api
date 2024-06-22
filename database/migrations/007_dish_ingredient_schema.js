'use strict'

const Schema = use('Schema')

class DishIngredientSchema extends Schema {
  up () {
    this.create('dish_ingredients', (table) => {
      table.increments('id'),
      table.integer('dish_id').unsigned().references('id').inTable('dishes')
      table.integer('ingredient_id').unsigned().references('id').inTable('ingredients')
      table.timestamps()
    })
  }

  down () {
    this.drop('dish_ingredients')
  }
}

module.exports = DishIngredientSchema
