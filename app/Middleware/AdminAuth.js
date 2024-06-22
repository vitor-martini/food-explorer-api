'use strict'
const AppException = use('App/Exceptions/AppException')

class AdminAuth {
  async handle ({ auth, response }, next) {
    const user = await auth.getUser()
      if (!user.is_admin) {
        throw new AppException('Forbidden', 403)
      }

      await next()
  }
}

module.exports = AdminAuth
