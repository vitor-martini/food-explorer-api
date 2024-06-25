'use strict'
const PgRepository = use('App/Repositories/PgRepository')
const Order = use('App/Models/Order')

class OrderRepository extends PgRepository{
  async getByUser(userId) {
    const orders = await this.model.query()
      .where({ user_id: userId })
      .with('orderDishes', dishBuilder => {
        dishBuilder.with('dish')
      })
      .with('status')
      .orderBy('created_at')
      .fetch()

    return orders
  }

  async getAll() {
    const orders = await this.model.query()
      .with('orderDishes', dishBuilder => {
        dishBuilder.with('dish')
      })
      .with('status')
      .with('users')
      .orderBy('created_at')
      .fetch()

    return orders
  }
}

module.exports = new OrderRepository(Order)