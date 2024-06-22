'use strict'
const PgRepository = use('App/Repositories/PgRepository')
const Order = use('App/Models/Order')

class OrderRepository extends PgRepository{
}

module.exports = new OrderRepository(Order)