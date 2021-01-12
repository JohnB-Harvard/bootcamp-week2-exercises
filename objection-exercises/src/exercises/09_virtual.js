const cleanup = require('../lib/cleanup')
// Import models

const run = async () => {
  const User = require('../models/User')
  // Write Queries and Logs Here !!!

  // Use basic queries to test any virtual attributes you wrote on your models
  const person = await User.query().first()
  console.log(person.fullName())

  // -----
  cleanup()
}

run()
