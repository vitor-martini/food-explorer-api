'use strict'

const AppException = use('App/Exceptions/AppException')

class AppService {
  constructor(repository) {
    this.repository = repository
  }

  async getAll() {
    return await this.repository.getAll()
  }

  async getById(id) {
    return await this.repository.findById(id)
  }

  async create(data) {
    return await this.repository.create(data)
  }

  async update(id, data) {
    const obj = await this.repository.findById(id)
    if(!obj) {
      throw new AppException('Not found', 404)
    }

    return await this.repository.update(obj, data)
  }

  async delete(id) {
    const obj = await this.repository.findById(id);
    if(!obj) {
      throw new AppException('Not found', 404)
    }

    await this.repository.delete(obj)
  }
}

module.exports = AppService