'use strict'

const Model = use('Model')

class Status extends Model {
  static get table () {
    return 'status'
  }
  
  order() {
    return this.hasMany('App/Models/Order')
  }
}

module.exports = Status
