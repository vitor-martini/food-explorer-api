'use strict'
const PgRepository = use('App/Repositories/PgRepository')
const Status = use('App/Models/Status')

class StatusRepository extends PgRepository{
}

module.exports = new StatusRepository(Status)
