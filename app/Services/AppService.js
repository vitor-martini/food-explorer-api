'use strict'

const AppException = use('App/Exceptions/AppException')

class AppService {
  constructor(repository) {
    this.repository = repository
  }

  async destroy(id) {
    const obj = await this.repository.findById(id);
    if(!obj) {
      throw new AppException('Not found', 404)
    }

    await this.repository.destroy(obj)
  }

  async getAll() {
    return await this.repository.getAll()
  }

  async getById(id) {
    const obj = await this.repository.findById(id)
    if(!obj) {
      throw new AppException('Not found', 404)
    }
    return obj
  }

  async store(data) {
    return await this.repository.store(data)
  }

  async update(id, data) {
    const obj = await this.repository.findById(id)
    if(!obj) {
      throw new AppException('Not found', 404)
    }

    return await this.repository.update(obj, data)
  }
}

module.exports = AppService