'use strict'

const Route = use('Route')

Route.delete('sessions', 'SessionController.logout')
Route.post('sessions', 'SessionController.login')