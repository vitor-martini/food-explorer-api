'use strict'

const UserService = use('App/Services/UserService')

class UserController {
  constructor() {
    this.userService = UserService
  }

  async destroy({ params, response }) {
    await this.userService.destroy(params.id)
    return response.status(204).json(null)
  }

  async index({ response }) {
    const users = await this.userService.getAll()
    return response.json(users)
  }

  async show({ params }) {
    return this.userService.getById(params.id)
  }

  async store({ request, response }) {
    const userData = request.only(['name', 'email', 'password']) 
    const user = await this.userService.store(userData)

    return response.status(201).json(user)
  }

  async update({ auth, params, request, response }) {
    const requestUser = await auth.getUser()
    let userData = {}
    if(requestUser.is_admin) {
      userData = request.only(['name', 'email', 'password', 'active', 'is_admin'])
    } else {
      userData = request.only(['name', 'email', 'password', 'old_password'])
    }

    await this.userService.update(requestUser, params.id, userData)
    return response.status(200).json(null)
  }
}

module.exports = UserController 