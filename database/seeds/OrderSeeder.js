'use strict'

const Order = use('App/Models/Order')

class OrderSeeder {
  async run () {
    await Order.createMany([
      { user_id: 1, status_id: 1, price: 2 * 25.00 + 20.00 },
      { user_id: 2, status_id: 2, price: 3 * 30.00 + 4 * 10.00 }, 
      { user_id: 3, status_id: 3, price: 5 * 5.00 + 8.00 }, 
      { user_id: 4, status_id: 1, price: 2 * 4.00 + 3 * 6.00 }, 
      { user_id: 5, status_id: 2, price: 15.00 + 2 * 2.00 },
      { user_id: 1, status_id: 3, price: 3 * 8.00 + 4 * 6.00 }, 
      { user_id: 2, status_id: 1, price: 5 * 3.00 + 5.00 }, 
      { user_id: 3, status_id: 2, price: 2 * 7.00 + 3 * 5.00 }, 
      { user_id: 4, status_id: 3, price: 4 * 7.00 + 5 * 4.00 },
      { user_id: 5, status_id: 1, price: 12.00 + 2 * 6.00 }, 
      { user_id: 1, status_id: 2, price: 25.00 + 2 * 30.00 }, 
      { user_id: 2, status_id: 3, price: 3 * 5.00 + 4 * 4.00 },
      { user_id: 3, status_id: 1, price: 15.00 + 2 * 8.00 }, 
      { user_id: 4, status_id: 2, price: 3 * 3.00 + 4 * 7.00 },
      { user_id: 5, status_id: 3, price: 5 * 7.00 + 12.00 },
      { user_id: 1, status_id: 1, price: 2 * 20.00 + 3 * 10.00 }, 
      { user_id: 2, status_id: 2, price: 4 * 8.00 + 5 * 6.00 }, 
      { user_id: 3, status_id: 3, price: 1 * 2.00 + 2 * 6.00 }, 
      { user_id: 4, status_id: 1, price: 3 * 5.00 + 4 * 5.00 }, 
      { user_id: 5, status_id: 2, price: 5 * 4.00 + 6.00 }  
    ])
  }
}

module.exports = OrderSeeder
