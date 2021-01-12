const cleanup = require('../lib/cleanup')
// Import models

const run = async () => {
  const User = require('../models/User')
  const Pet = require('../models/Pet')
  /**
    Create a transaction. It should (without using insertGraph): create a new
    user with returning(), give that user a pet, and fetch the total number of
    pets. If that total number exceeds 15, it should delete all BIRDS. Test
    the transaction by throwing an error: throw new Error("This is an error").
   */
  try{
    const Michelle = await User.transaction(async trx => {
      const person = await User.query(trx).insert({
        firstName: 'Michelle',
        lastName: 'Bourland',
        email: 'Michelle.Bourland@gmail.com'
      }).returning("*")

      const Mittens = await person.$relatedQuery('pets', trx).insert({
        name: 'Mittens',
        type: 'CAT',
      }).returning("*")

      const numPets = await Pet.query().resultSize()
      if(numPets > 15){
        const birds = await Pet.query().delete().where('type', 'BIRD')
      }

      //throw new Error("This is an error")
    })
  }
  catch(err){
    console.log(err)
  }

  // -----
  cleanup()
}

run()
