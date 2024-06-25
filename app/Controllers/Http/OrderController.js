'use strict'

const OrderService = use('App/Services/OrderService')

class OrderController {
  constructor() {
    this.orderService = OrderService
  }

  async store({ auth, request, response }) {
    const requestUser = await auth.getUser()
    const { dishes } = request.only(['dishes'])

    const order = await this.orderService.store({ dishes, userId: requestUser.id })
    return response.status(200).json(order)
  }

  async index({ auth, response }) {
    const user = await auth.getUser()
    const orders = await this.orderService.index(user)
    return response.status(200).json(orders)
  }

  async update({ params, request, response }) {
    const orderId = params.id
    const { status } = request.only(['status'])

    await this.orderService.update({ orderId, status })
    return response.status(200).json()
  }
}

module.exports = OrderController