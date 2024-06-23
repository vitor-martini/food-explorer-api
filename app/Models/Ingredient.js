'use strict'

const Model = use('Model')
const { capitalizeFirstLetter } = require('../Utils/stringUtils')

class Ingredient extends Model {
  static boot() {
    super.boot()
    this.addHook('beforeSave', async (ingredientInstance) => {
      ingredientInstance.name = capitalizeFirstLetter(ingredientInstance.name)
    })
  }

  dishes() {
    return this.belongsToMany('App/Models/Dish').pivotTable('dish_ingredients').withTimeStamps()
  }
}

module.exports = Ingredient
