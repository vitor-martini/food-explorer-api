'use strict'

const Model = use('Model')

class OrderDish extends Model {
  order() {
    return this.belongsTo('App/Models/Order')
  }

  dish() {
    return this.belongsTo('App/Models/Dish')
  }
}

module.exports = OrderDish
