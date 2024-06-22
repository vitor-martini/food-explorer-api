'use strict'

const Route = use('Route')

Route.post('session', 'SessionController.login')
Route.get('session', 'SessionController.logout')