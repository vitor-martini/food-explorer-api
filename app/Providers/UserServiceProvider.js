'use strict'

const { ServiceProvider } = require('@adonisjs/fold')

class UserServiceProvider extends ServiceProvider {
  register() {
    this.app.singleton('App/Services/UserService', (app) => {
      const userRepository = app.use('App/Repositories/UserRepository')
      const UserService = require('../Services/UserService') 

      return new UserService(userRepository)
    })
  }
}

module.exports = UserServiceProvider
