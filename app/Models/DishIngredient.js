'use strict'

const Model = use('Model')

class DishIngredient extends Model {
  dishes() {
    return this.belongsToMany('App/Models/Dish')
  }
  
  ingredients() {
    return this.belongsToMany('App/Models/Ingredients')
  }
}

module.exports = DishIngredient
