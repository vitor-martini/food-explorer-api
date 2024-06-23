'use strict'

const Schema = use('Schema')

class OrderSchema extends Schema {
  up () {
    this.create('orders', (table) => {
      table.increments('id')
      table.integer('user_id').notNullable().unsigned().references('id').inTable('users')
      table.integer('status_id').notNullable().unsigned().references('id').inTable('status')
      table.decimal('price').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('orders')
  }
}

module.exports = OrderSchema
