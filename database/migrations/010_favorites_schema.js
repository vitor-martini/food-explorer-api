'use strict'

const Schema = use('Schema')

class FavoritesSchema extends Schema {
  up () {
    this.create('favorites', (table) => {
      table.increments('id')
      table.integer('dish_id').unsigned().references('id').inTable('dishes')
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.timestamps()
    })
  }

  down () {
    this.drop('favorites')
  }
}

module.exports = FavoritesSchema
