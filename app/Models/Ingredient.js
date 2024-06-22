'use strict'

const Model = use('Model')

class Ingredient extends Model {
  dishes() {
    return this.belongsToMany('App/Models/Dish').pivotTable('dish_ingredients').withTimeStamps()
  }
}

module.exports = Ingredient
