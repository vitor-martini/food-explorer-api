'use strict'

const PgRepository = use('App/Repositories/PgRepository')
const User = use('App/Models/User')

class UserRepository extends PgRepository {
  async findByEmail(email) {
    return this.model.query()
      .whereRaw('LOWER(email) = ?', email.toLowerCase())
      .first()
  }

  async getAll() {
    const users = await this.model
      .query()
      .select('name', 'email', 'is_admin', 'created_at', 'updated_at')
      .fetch()
      
    return users.toJSON() 
  }

  async delete(user) {
    await user.save()
    return user
  }
}

module.exports = new UserRepository(User)