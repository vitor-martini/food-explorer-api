'use strict'

const StatusService = use('App/Services/StatusService')

class StatusController {
  constructor() {
    this.statusService = StatusService
  }

  async index({ response }) {
    const status = await this.statusService.getAll()
    return response.json(status)
  }
}

module.exports = StatusController 