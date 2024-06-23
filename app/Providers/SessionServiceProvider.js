'use strict'

const { ServiceProvider } = require('@adonisjs/fold')

class SessionServiceProvider extends ServiceProvider {
  register() {
    this.app.singleton('App/Services/SessionService', (app) => {
      const userRepository = app.use('App/Repositories/UserRepository')
      const SessionService = require('../Services/SessionService') 

      return new SessionService(userRepository)
    })
  }
}

module.exports = SessionServiceProvider
