'use strict'

const Model = use('Model')

class Dish extends Model {
  category() {
    return this.belongsTo('App/Models/Category')
  }

  favorites() {
    return this.belongsToMany('App/Models/User').pivotTable('favorites').withTimeStamps()
  }

  ingredients() {
    return this.belongsToMany('App/Models/Ingredient').pivotTable('dish_ingredients').withTimeStamps()
  }

  orders() {
    return this.hasMany('App/Models/OrderDish')
  }
}

module.exports = Dish
