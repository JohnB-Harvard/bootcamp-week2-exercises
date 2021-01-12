const { userParams } = require('../lib')
const cleanup = require('../lib/cleanup')
// Import models

const run = async () => {
  const User = require('../models/User')
  const Pet = require('../models/Pet')

  // Write Queries and Logs Here !!!
  
  // Get all users with a specific name (pick it from your database)
  const Adolphs = await User.query().where('firstName','Adolph')
  console.log(Adolphs)

  // Do the same with object notation
  const Adolphs2 = await User.query().where({firstName: 'Adolph'})
  console.log(Adolphs2)

  // Get all DOGS and BIRDS
  const dogsBirds = await Pet.query().whereIn('type', ['DOG','BIRD'])
  console.log(dogsBirds)

  // -----
  cleanup()
}

run()
