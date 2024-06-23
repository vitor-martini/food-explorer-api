const dishRepository = use('App/Repositories/DishRepository')
const categoryRepository = use('App/Repositories/CategoryRepository')
const DishService = use('App/Services/DishService')
const dishService = new DishService(dishRepository, categoryRepository)

class DishController {
  async create({ request, response }) {
    const dishData = request.only(['name', 'category_id', 'price', 'description'])
    const dish = await dishService.create(dishData)
    return response.status(201).json(dish)
  }
}

module.exports = DishController