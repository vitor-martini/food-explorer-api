'use strict'

const { capitalizeFirstLetter } = require("../Utils/stringUtils")
const Model = use('Model')

class Dish extends Model {
  static boot() {
    super.boot()
    this.addHook('beforeSave', async (dishInstance) => {
      dishInstance.name = capitalizeFirstLetter(dishInstance.name)
    })
  }

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
