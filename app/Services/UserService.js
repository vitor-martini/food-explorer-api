'use strict'

const AppService = use("App/Services/AppService")
const AppException = use('App/Exceptions/AppException')

class UserService extends AppService {
  constructor(userRepository) {
    super(userRepository)
  }

  async create(data) {
    if(!data.name || !data.email || !data.password) {
      throw new AppException('Required fields not informed', 400)
    }

    if(!data.email.includes('@')) {
      throw new AppException('Invalid e-mail', 400)
    }

    const emailAlreadyUsed = await this.repository.findByEmail(data.email)
    if(emailAlreadyUsed){
      throw new AppException('Email already in use', 400)
    }

    return await this.repository.create(data)
  }
}

module.exports = UserService