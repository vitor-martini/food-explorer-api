'use strict'

const AppService = use("App/Services/AppService")

class CategoryService extends AppService {
  constructor(repository) {
    super(repository)
  }
}

module.exports = CategoryService