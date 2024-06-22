'use strict'
const PgRepository = use('App/Repositories/PgRepository')
const OrderDish = use('App/Models/OrderDish')

class OrderDishRepository extends PgRepository{
}

module.exports = new OrderDishRepository(OrderDish)
