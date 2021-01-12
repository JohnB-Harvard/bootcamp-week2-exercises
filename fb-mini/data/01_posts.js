const casual = require('casual')
const userData = require('./00_users')

casual.define('post', (userId) => ({
  id: casual.uuid,
  user_id: userId,
  date_posted: casual.date(),
  num_likes: casual.integer(from = 0, to = 100000)
}))

const postData = []

for (let i = 0; i < 20; ++i) {
  userId = casual.random_element(userData).id
  postData.push(casual.post(userId))
}

module.exports = postData

