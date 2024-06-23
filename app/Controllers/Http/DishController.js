const dishRepository = use('App/Repositories/DishRepository')
const categoryRepository = use('App/Repositories/CategoryRepository')
const ingredientRepository = use('App/Repositories/IngredientRepository')
const dishIngredientRepository = use('App/Repositories/DishIngredientRepository')
const DishService = use('App/Services/DishService')
const dishService = new DishService(dishRepository, categoryRepository, ingredientRepository, dishIngredientRepository)

class DishController {
  async create({ request, response }) {
    const dishData = request.only(['name', 'category_id', 'price', 'description', 'ingredients'])
    const dish = await dishService.create(dishData)
    return response.status(201).json(dish)
  }
}

module.exports = DishController