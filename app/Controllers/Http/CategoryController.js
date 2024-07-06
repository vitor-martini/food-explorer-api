'use strict'

const CategoryService = use('App/Services/CategoryService')

class CategoryController {
  constructor() {
    this.categoryService = CategoryService
  }

  async index({ response }) {
    const categories = await this.categoryService.getAll()
    return response.json(categories)
  }
}

module.exports = CategoryController 