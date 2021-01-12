
const friendData = require('../data/02_friends')

exports.seed = knex => knex('friends').del()
  .then(() => knex('friends').insert(friendData))
