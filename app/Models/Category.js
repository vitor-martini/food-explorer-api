'use strict'

const Model = use('Model')

class Category extends Model {
  dishes() {
    return this.hasMany('App/Models/Dish')
  }
}

module.exports = Category
