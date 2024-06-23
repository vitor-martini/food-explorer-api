'use strict'

const Route = use('Route')

Route.post('sessions', 'SessionController.login')
Route.get('sessions', 'SessionController.logout')