'use strict'

const Schema = use('Schema')

class StatusSchema extends Schema {
  up () {
    this.create('status', (table) => {
      table.increments('id')
      table.string('name').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('status')
  }
}

module.exports = StatusSchema
