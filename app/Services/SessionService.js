'use strict'
const AppException = use('App/Exceptions/AppException')
const Hash = use('Hash')

class SessionService {
  constructor(userRepository) {
    this.userRepository = userRepository
  }

  async login({ email, password }){
    if(!email || !password) {
      throw new AppException("Invalid email or password")
    }  

    const user = await this.userRepository.getByEmail(email)
    if(!user) {
      throw new AppException("Invalid email or password")
    }

    if(!user.active) {
      throw new AppException("User inactive")
    }

    const passwordIsValid = await Hash.verify(password, user.password)
    if(!passwordIsValid) {
      throw new AppException("Invalid email or password")
    }

    return user.toJSON();
  }
}

module.exports = SessionService