const casual = require('casual')

casual.define('user', () => ({
  id: casual.uuid,
  email: casual.email,
  first_name: casual.first_name,
  last_name: casual.last_name,
  nickname: casual.first_name,
  DOB: casual.date(),
  password: casual.string,
  Bio: casual.sentence,
  date_created: casual.moment,
  status: casual.random_element(['online','away','offline'])
}))

const userData = []

for (let i = 0; i < 20; ++i) {
  userData.push(casual.user)
}

module.exports = userData
