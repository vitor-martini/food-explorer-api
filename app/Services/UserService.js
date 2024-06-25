'use strict'

const Hash = use('Hash')
const AppService = use("App/Services/AppService")
const AppException = use('App/Exceptions/AppException')

class UserService extends AppService {
  constructor(repository) {
    super(repository)
  }

  async destroy(id) {
    const user = await this.repository.findById(id)
    if(!user) {
      throw new AppException('Not found', 404)
    }

    user.active = false 
    return await this.repository.destroy(user)
  }

  async store(data) {
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

    return await this.repository.store(data)
  }

  async update(requestUser, id, data) {
    this.validateParams(data)
    this.validateAuthorization(requestUser, id)
    const user = await this.repository.findById(id)
    if(!user) {
      throw new AppException('Not found', 404)
    }
    await this.validatePassword(requestUser, data, user)
    await this.validateEmail(data, id)

    delete data.old_password
    user.merge(data)
    return await this.repository.update(user)
  }

  validateAuthorization(requestUser, id) {
    if(!requestUser.is_admin && Number(requestUser.id) !== Number(id)) {
      throw new AppException('Unauthorized', 401)
    }
  }

  async validateEmail(data, id) {
    if(data.email) {
      const emailUser = await this.repository.findByEmail(data.email)
      if(emailUser && Number(emailUser.id) !== Number(id)) {
        throw new AppException('Email already in use', 400)
      }
    }
  }

  validateParams(data) {
    if(Object.keys(data).length === 0) {
      throw new AppException('No valid params', 400)
    }
  }

  async validatePassword(requestUser, data, user) {
    if(!requestUser.is_admin && 
      ((data.password && !data.old_password) || 
      (!data.password && data.old_password))){
        throw new AppException('In order to update the password you must inform the old and new one', 400)
      } 
    
    if(!requestUser.is_admin && 
        data.password && data.old_password){
        const passwordIsValid = await Hash.verify(data.old_password, user.password)
        if(!passwordIsValid) {
          throw new AppException("Invalid password")
        }
    }
  }
}

module.exports = UserService