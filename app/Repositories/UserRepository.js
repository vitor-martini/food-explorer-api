'use strict'

const PgRepository = use('App/Repositories/PgRepository')
const User = use('App/Models/User')

class UserRepository extends PgRepository {
}

module.exports = new UserRepository(User)