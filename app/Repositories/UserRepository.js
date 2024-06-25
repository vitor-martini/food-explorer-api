'use strict'

const PgRepository = use('App/Repositories/PgRepository')
const User = use('App/Models/User')

class UserRepository extends PgRepository {
  async getByEmail(email) {
    return this.model.query()
      .whereRaw('LOWER(email) = ?', email.toLowerCase())
      .first()
  }

  async getAll() {
    const users = await this.model
      .query()
      .select('name', 'email', 'is_admin', 'created_at', 'updated_at')
      .orderBy('name')
      .fetch()
      
    return users
  }

  async destroy(user) {
    await user.save()
    return user
  }
}

module.exports = new UserRepository(User)