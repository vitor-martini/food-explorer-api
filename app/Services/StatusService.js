'use strict'

const AppService = use("App/Services/AppService")

class StatusService extends AppService {
  constructor(repository) {
    super(repository)
  }
}

module.exports = StatusService