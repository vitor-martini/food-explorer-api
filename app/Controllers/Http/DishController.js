'use strict'

const DishService = use('App/Services/DishService')

class DishController {
  constructor() {
    this.dishService = DishService
  }

  async create({ request, response }) {
    const dishData = request.only(['name', 'category_id', 'price', 'description', 'ingredients'])
    const dish = await this.dishService.create(dishData)
    return response.status(201).json(dish)
  }

  async update({ params, request, response }) {
    const dishId = params.id 
    const dishData = request.only(['name', 'category_id', 'price', 'description', 'ingredients'])
    const dish = await this.dishService.update(dishId, dishData)
    return response.status(200).json(dish)
  }

  async updatePhoto({ params, request, response }) {
    const dishId = params.id
    const photo = request.file('photo', {
      types: ['image'],
      size: '2mb'
    })

    await this.dishService.updatePhoto(dishId, photo)
    return response.status(200).json()
  }

  async destroy({ params, response }) {
    await this.dishService.delete(params.id)
    return response.status(200).json()
  }
}

module.exports = DishController
