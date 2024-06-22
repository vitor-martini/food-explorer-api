'use strict'

const UserRepository = use('App/Repositories/UserRepository')
const UserService = use('App/Services/UserService')
const userService = new UserService(UserRepository)

class UserController {
  async index({ response }) {
    const users = await userService.getAll()
    return response.json(users)
  }

  async store({ request, response }) {
    const userData = request.only(['name', 'email', 'password']) 
    const user = await userService.create(userData)
    return response.status(201).json(user)
  }

  async destroy({ params, response }) {
    await userService.delete(params.id)
    return response.status(204).json(null)
  }
}

module.exports = UserController 