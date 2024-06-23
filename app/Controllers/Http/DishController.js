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
}

module.exports = DishController
