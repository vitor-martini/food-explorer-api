'use strict'

const Route = use('Route')

Route.get('sessions', 'SessionController.logout')
Route.post('sessions', 'SessionController.login')