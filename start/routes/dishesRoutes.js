'use strict'

const Route = use('Route')

Route.delete('dishes/:id', 'DishController.destroy').middleware(['authViaCookie', 'adminAuth'])
Route.get('dishes/:id', 'DishController.show')
Route.post('dishes', 'DishController.create').middleware(['authViaCookie', 'adminAuth'])
Route.put('dishes/:id', 'DishController.update').middleware(['authViaCookie', 'adminAuth'])
Route.post('dishes/photo/:id', 'DishController.updatePhoto').middleware(['authViaCookie', 'adminAuth'])