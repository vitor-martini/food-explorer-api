'use strict'

const AppService = use('App/Services/AppService')
const AppException = use('App/Exceptions/AppException')
const Database = use('Database')
const ORDER_STATUS = use('App/Enums/OrderStatus')

class OrderService extends AppService {
  constructor(orderRepository, dishRepository, orderDishRepository, statusRepository) {
    super(orderRepository)
    this.dishRepository = dishRepository
    this.orderDishRepository = orderDishRepository
    this.statusRepository = statusRepository
  }

  async index(user) {
    const isAdmin = user.is_admin
    if(isAdmin) {
      return this.repository.getAll()
    }

    return this.repository.getByUser(user.id)
  }

  async store({ dishes, userId }) {
    let price = 0
    dishes = await Promise.all(dishes.map(async dish => {
        let checkDish = await this.dishRepository.getById(dish.id)
        if(checkDish) {
          checkDish = checkDish.toJSON()
          price += checkDish.price * dish.quantity
          checkDish.quantity = dish.quantity
          return checkDish
        } 

        throw new AppException('Invalid dish informed', 400)
      })
    )

    const trx = await Database.beginTransaction()
    try {
      const order = {
        user_id: userId,
        status_id: ORDER_STATUS.PENDING,
        price
      }
  
      const createdOrder = await this.repository.store(order, trx)
      await Promise.all(dishes.map(async dish => {
        await this.orderDishRepository.store({
          order_id: createdOrder.id,
          dish_id: dish.id,
          quantity: dish.quantity
        }, trx)
      }))

      await trx.commit()
    } catch(error) {
      await trx.rollback()
      throw error
    }
  }

  async update({ orderId, status }) {
    const order = await this.repository.getById(orderId)
    if(!order) {
      throw new AppException('Invalid order id', 400)
    }

    const checkStatus = await this.statusRepository.getById(status)
    if(!checkStatus) {
      throw new AppException('Invalid status', 400)
    }

    order.status_id = status
    return await this.repository.update(order)
  }
}

module.exports = OrderService