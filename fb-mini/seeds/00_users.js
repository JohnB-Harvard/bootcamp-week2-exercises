
const userData = require('../data/00_users')

exports.seed = knex => knex('users').del()
  .then(() => knex('users').insert(userData))
