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

  async create(data) {
    return await this.model.create(data)
  }

  async update(obj, data) {
    obj.merge(data)
    await obj.save()
    return obj
  }

  async delete(obj) {
    await obj.delete()
  }
}

module.exports = PgRepository