const cleanup = require('../lib/cleanup')
// Import models

const run = async () => {
  const User = require('../models/User')
  const Pet = require('../models/Pet')
  // Write Queries and Logs Here !!!

  // Insert yourself in the users table
  // const me = await User.query().insert({
  //   firstName: 'John',
  //   lastName: 'Bourland',
  //   email: 'jdbourland@college.harvard.edu',
  // })
  // console.log(me)
  // Insert a pet belonging to you (get your ID from Postico or DBeaver)
  // const myPet = await Pet.query().insert({
  //   ownerId: 'f1d09228-9eea-418a-9d95-bd4fe4a57db9',
  //   type: 'CAT',
  //   name: 'Mittens'
  // })
  const me = await User.query().where('firstName','John')
  const myPet = await Pet.query().where('name', 'Mittens')
  console.log(me, myPet)
  // -----
  cleanup()
}

run()
