'use strict'

const Model = use('Model')

class Favorite extends Model {
  users() {
    return this.belongsTo('App/Models/User')
  }

  dishes() {
    return this.belongsTo('App/Models/Dish')
  }
}

module.exports = Favorite
