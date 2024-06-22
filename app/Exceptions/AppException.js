'use strict'

const { LogicalException } = require('@adonisjs/generic-exceptions')
class AppException extends LogicalException {
  handle (error, { response }) {
    response.status(error.status).send({
      error: 'Business Rule Violation',
      message: error.message
    })
  }
}

module.exports = AppException

