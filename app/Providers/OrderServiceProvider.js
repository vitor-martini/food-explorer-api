'use strict'

const { ServiceProvider } = require('@adonisjs/fold')

class OrderServiceProvider extends ServiceProvider {
  register() {
    this.app.singleton('App/Services/OrderService', (app) => {
      const orderRepository = app.use('App/Repositories/OrderRepository')
      const dishRepository = app.use('App/Repositories/DishRepository')
      const orderDishRepository = app.use('App/Repositories/OrderDishRepository')
      const statusRepository = app.use('App/Repositories/StatusRepository')
      const OrderService = require('../Services/OrderService')

      return new OrderService(orderRepository, dishRepository, orderDishRepository, statusRepository)
    })
  }
}

module.exports = OrderServiceProvider
