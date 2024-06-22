'use strict'

const Route = use('Route')

Route.get('users', 'UserController.index').middleware(['authViaCookie'])
Route.post('users', 'UserController.store')
Route.delete('users/:id', 'UserController.destroy')