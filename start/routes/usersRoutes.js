'use strict'

const Route = use('Route')

Route.delete('users/:id', 'UserController.destroy').middleware(['authViaCookie', 'adminAuth'])
Route.get('users', 'UserController.index').middleware(['authViaCookie', 'adminAuth'])
Route.get('users/:id', 'UserController.show').middleware(['authViaCookie', 'adminAuth'])
Route.post('users', 'UserController.store')
Route.put('users/:id', 'UserController.update').middleware(['authViaCookie'])