'use strict'

const Status = use('App/Models/Status')

class StatusSeeder {
  async run () {
    await Status.createMany([
      { name: 'Pendente' },
      { name: 'Preparando' },
      { name: 'Entregue' },
    ])
  }
}

module.exports = StatusSeeder
