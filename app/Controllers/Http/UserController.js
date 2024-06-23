'use strict'

const userRepository = use('App/Repositories/UserRepository')
const UserService = use('App/Services/UserService')
const userService = new UserService(userRepository)

class UserController {
  async destroy({ params, response }) {
    await userService.delete(params.id)
    return response.status(204).json(null)
  }

  async index({ response }) {
    const users = await userService.getAll()
    return response.json(users)
  }

  async store({ request, response }) {
    const userData = request.only(['name', 'email', 'password']) 
    const user = await userService.create(userData)
    return response.status(201).json(user)
  }
  
  async show({ params }) {
    return userService.getById(params.id)
  }

  async update({ auth, params, request, response }) {
    const requestUser = await auth.getUser()
    let userData = {}
    if(requestUser.is_admin) {
      userData = request.only(['name', 'email', 'password', 'active', 'is_admin'])
    } else {
      userData = request.only(['name', 'email', 'password', 'old_password'])
    }

    await userService.update(requestUser, params.id, userData)
    return response.status(200).json(null)
  }
}

module.exports = UserController 