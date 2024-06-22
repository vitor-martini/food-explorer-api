'use strict'
const AppException = use('App/Exceptions/AppException')

class AuthViaCookie {
  async handle ({ request, auth, response }, next) {
    const token = request.cookie('token')
    if (token) {
      try {
        request.request.headers['authorization'] = `Bearer ${token}`
        await auth.check()
      } catch (error) {
        throw new AppException('Unauthorized', 401)
      }
    } else {
      throw new AppException('Unauthorized', 401)
    }

    await next()
  }
}

module.exports = AuthViaCookie
