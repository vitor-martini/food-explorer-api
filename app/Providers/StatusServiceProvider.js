'use strict'

const { ServiceProvider } = require('@adonisjs/fold')

class StatusServiceProvider extends ServiceProvider {
  register() {
    this.app.singleton('App/Services/StatusService', (app) => {
      const statusRepository = app.use('App/Repositories/StatusRepository')
      const StatusService = require('../Services/StatusService') 

      return new StatusService(statusRepository)
    })
  }
}

module.exports = StatusServiceProvider
