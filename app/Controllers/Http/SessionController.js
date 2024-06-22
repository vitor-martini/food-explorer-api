'use strict'

const Env = use('Env')
const UserRepository = use('App/Repositories/UserRepository')
const SessionService = use('App/Services/SessionService')
const sessionService = new SessionService(UserRepository)

class SessionController {
  async login({ request, auth, response }) {
    const { email, password } = request.all()
    const user = await sessionService.login({ email, password })
    const token = await auth.generate(user)
    const cookieMaxAge = Env.get('COOKIE_MAX_AGE', 7200) 
    response.cookie('token', token.token, {
      httpOnly: true,
      secure: true,
      sameSite: "none",
      maxAge: cookieMaxAge
    })

    delete user.password
    return response.json({user, token: token.token})
  }

  async logout({ response }) {
    response.clearCookie('token')
    return response.json({ message: 'Logged out successfully' })
  }
}

module.exports = SessionController