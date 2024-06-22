'use strict'

const User = use('App/Models/User')
const Hash = use('Hash')

class UserSeeder {
  async run () {
    await User.createMany([
      {
        name: 'Alice Johnson',
        email: 'alice.johnson@example.com',
        password: '123',
        is_admin: false
      },
      {
        name: 'Bob Smith',
        email: 'bob.smith@example.com',
        password: '123',
        is_admin: false
      },
      {
        name: 'Carol Williams',
        email: 'carol.williams@example.com',
        password: '123',
        is_admin: false
      },
      {
        name: 'David Brown',
        email: 'david.brown@example.com',
        password: '123',
        is_admin: false
      },
      {
        name: 'Eve Davis',
        email: 'eve.davis@example.com',
        password: '123',
        is_admin: false
      },
      {
        name: 'John Doe',
        email: 'john.doe@example.com',
        password: '123',
        is_admin: true
      }
    ])
  }
}

module.exports = UserSeeder
