'use strict'

class PgRepository {
  constructor(model) {
    if(new.target === PgRepository) {
      throw new Error("Cannot instantiate abstract class PgRepository directly")
    }
    this.model = model
  }

  async getAll() {
    return await this.model.all()
  }

  async findById(id) {
    return await this.model.find(id)
  }

  async store(data, trx = null) {
    if(trx) {
      return await this.model.create(data, trx)  
    }

    return await this.model.create(data)
  }

  async update(obj, trx = null) {
    await obj.save(trx)
    return obj
  }

  async destroy(obj) {
    await obj.delete()
  }
}

module.exports = PgRepository