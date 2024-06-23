const AppService = use('App/Services/AppService')
const AppException = use('App/Exceptions/AppException')

class DishService extends AppService {
  constructor(dishRepository, categoryRepository) {
    super(dishRepository)
    this.categoryRepository = categoryRepository
  }

  async create({name, category_id, price, description}) {
    if(!name || !category_id || !price || !description) {
      throw new AppException('Required fields not informed', 400)
    }

    const isNameAlreadyInUse = await this.repository.findByName(name)
    if(isNameAlreadyInUse) {
      throw new AppException('Dish already registered', 400)
    }

    const isValidCategory = await this.categoryRepository.findById(category_id)
    if(!isValidCategory) {
      throw new AppException('Invalid category', 400)
    }

    return await this.repository.create({name, category_id, price, description})
  }
}

module.exports = DishService