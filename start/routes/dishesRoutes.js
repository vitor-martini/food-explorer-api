'use strict'

const Route = use('Route')

Route.post('dishes', 'DishController.create').middleware(['authViaCookie', 'adminAuth'])