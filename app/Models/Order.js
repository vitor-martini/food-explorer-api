'use strict'

const Model = use('Model')

class Order extends Model {
  orderDishes() {
    return this.hasMany('App/Models/OrderDish')
  }

  status() {
    return this.belongsTo('App/Models/Status')
  }

  users() {
    return this.belongsTo('App/Models/User')
  }
}

module.exports = Order
