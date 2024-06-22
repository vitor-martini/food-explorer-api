'use strict'

const Model = use('Model')

class Token extends Model {
  users() {
    return this.belongsTo('App/Model/User')
  }
}

module.exports = Token
