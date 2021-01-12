
const postData = require('../data/01_posts')

exports.seed = knex => knex('posts').del()
  .then(() => knex('posts').insert(postData))
