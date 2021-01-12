const cleanup = require('../lib/cleanup')
// Import models

const run = async () => {
  const Pet = require('../models/Pet')
  const User = require('../models/User')
  // Write Queries and Logs Here !!!

  // Get the total number of users
  const numUser = await User.query().resultSize()
  console.log(numUser)
  // Get the average age of users
  const avgAge = await User.query().avg('age as avgAge')
  console.log(avgAge)
  // Get the total number of dogs
  const numDogs = await Pet.query().where('type', 'DOG').resultSize()
  console.log(numDogs)
  // -----
  cleanup()
}

run()
