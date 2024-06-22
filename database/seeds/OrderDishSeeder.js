'use strict'

const OrderDish = use('App/Models/OrderDish')

class OrderDishSeeder {
  async run () {
    await OrderDish.createMany([
      { order_id: 1, dish_id: 1, quantity: 2 }, 
      { order_id: 1, dish_id: 2, quantity: 1 }, 
      { order_id: 2, dish_id: 3, quantity: 3 }, 
      { order_id: 2, dish_id: 4, quantity: 4 }, 
      { order_id: 3, dish_id: 5, quantity: 5 }, 
      { order_id: 3, dish_id: 6, quantity: 1 }, 
      { order_id: 4, dish_id: 7, quantity: 2 }, 
      { order_id: 4, dish_id: 8, quantity: 3 }, 
      { order_id: 5, dish_id: 9, quantity: 1 }, 
      { order_id: 5, dish_id: 10, quantity: 2 }, 
      { order_id: 6, dish_id: 11, quantity: 3 }, 
      { order_id: 6, dish_id: 12, quantity: 4 }, 
      { order_id: 7, dish_id: 13, quantity: 5 }, 
      { order_id: 7, dish_id: 14, quantity: 1 }, 
      { order_id: 8, dish_id: 15, quantity: 2 }, 
      { order_id: 8, dish_id: 16, quantity: 3 }, 
      { order_id: 9, dish_id: 17, quantity: 4 }, 
      { order_id: 9, dish_id: 18, quantity: 5 }, 
      { order_id: 10, dish_id: 19, quantity: 1 }, 
      { order_id: 10, dish_id: 20, quantity: 2 }, 
      { order_id: 11, dish_id: 1, quantity: 1 }, 
      { order_id: 11, dish_id: 3, quantity: 2 }, 
      { order_id: 12, dish_id: 5, quantity: 3 }, 
      { order_id: 12, dish_id: 7, quantity: 4 }, 
      { order_id: 13, dish_id: 9, quantity: 1 }, 
      { order_id: 13, dish_id: 11, quantity: 2 }, 
      { order_id: 14, dish_id: 13, quantity: 3 }, 
      { order_id: 14, dish_id: 15, quantity: 4 }, 
      { order_id: 15, dish_id: 17, quantity: 5 }, 
      { order_id: 15, dish_id: 19, quantity: 1 }, 
      { order_id: 16, dish_id: 2, quantity: 2 }, 
      { order_id: 16, dish_id: 4, quantity: 3 }, 
      { order_id: 17, dish_id: 6, quantity: 4 }, 
      { order_id: 17, dish_id: 8, quantity: 5 }, 
      { order_id: 18, dish_id: 10, quantity: 1 }, 
      { order_id: 18, dish_id: 12, quantity: 2 }, 
      { order_id: 19, dish_id: 14, quantity: 3 }, 
      { order_id: 19, dish_id: 16, quantity: 4 }, 
      { order_id: 20, dish_id: 18, quantity: 5 }, 
      { order_id: 20, dish_id: 20, quantity: 1 }  
    ])
  }
}

module.exports = OrderDishSeeder
