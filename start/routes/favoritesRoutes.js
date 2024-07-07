'use strict'

const Route = use('Route')

Route.delete('favorites', 'FavoriteController.destroy').middleware(['authViaCookie'])
Route.get('favorites', 'FavoriteController.index').middleware(['authViaCookie'])
Route.get('favorites/:dish_id', 'FavoriteController.show').middleware(['authViaCookie'])
Route.post('favorites', 'FavoriteController.store').middleware(['authViaCookie'])