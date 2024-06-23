'use strict'

const Schema = use('Schema')

class OrderDishSchema extends Schema {
  up () {
    this.create('order_dishes', (table) => {
      table.increments('id')
      table.integer('order_id').unsigned().references('id').inTable('orders')
      table.integer('dish_id').unsigned().references('id').inTable('dishes')
      table.integer('quantity').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('order_dishes')
  }
}

module.exports = OrderDishSchema
