const casual = require('casual')
const userData = require('./00_users')

casual.define('friend', (userId1,userId2) => ({
  id: casual.uuid,
  requester: userId1,
  requested: userId2,
  date_requested: casual.date(),
  intensity: casual.integer(from = 0, to = 100000),
  status: casual.random_element(['requested','accepted','declined']),
}))

const friendData = []

for (let i = 0; i < 20; ++i) {
  userId1 = casual.random_element(userData).id
  userId2 = casual.random_element(userData).id
  friendData.push(casual.friend(userId1,userId2))
}

module.exports = friendData

