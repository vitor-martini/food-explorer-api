'use strict'

const PgRepository = use('App/Repositories/PgRepository')
const User = use('App/Models/User')

class UserRepository extends PgRepository {
  async findByEmail(email) {
    return await this.model.findBy('email', email)
  }
}

module.exports = new UserRepository(User)