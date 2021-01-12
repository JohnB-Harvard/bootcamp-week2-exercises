const commentData = require('../data/03_comments')

exports.seed = knex => knex('comments').del()
  .then(() => knex('comments').insert(commentData))
