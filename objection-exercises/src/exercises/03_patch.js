const { userParams } = require('../lib')
const cleanup = require('../lib/cleanup')
// Import models

const run = async () => {
  const User = require('../models/User')
  // Write Queries and Logs Here !!

  // Update anyone below the age of 18 to be 18 years old (they shouldn't be keeping pets)
  const minors = await User.query().patch({'age':18}).where('age','<',18)
  // -----
  const remainder = await User.query().where('age', '<', 18)
  console.log(remainder)
  cleanup()
}

run()
