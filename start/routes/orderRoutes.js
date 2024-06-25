'use strict'

const Route = use('Route')

Route.get('orders', 'OrderController.index').middleware(['authViaCookie'])
Route.post('orders', 'OrderController.store').middleware(['authViaCookie'])
Route.put('orders/:id', 'OrderController.update').middleware(['authViaCookie'], ['adminAuth'])