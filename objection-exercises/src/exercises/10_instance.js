const cleanup = require('../lib/cleanup')
// Import models

const run = async () => {
  const User = require('../models/User')
  const Pet = require('../models/Pet')
  // Write Queries and Logs Here !!!

  // Get an instance of a user using findById(<YOUR_ID>)
  const me = await User.query().findById('f1d09228-9eea-418a-9d95-bd4fe4a57db9')
  // Use that instance to create a new pet related that user
  try{
    const Nikita = await me.$relatedQuery('pets').insert({
      name: 'Nikita',
      type: 'CAT',
    })
    console.log(Nikita)
  }
  catch(err){
    console.log(err)
  }
  // Use that instance to get all of the user's pets and children
  // Hint -- use $fetchGraph
  // https://vincit.github.io/objection.js/api/model/instance-methods.html#fetchgraph
  const myPetsMyChildren = await me.$fetchGraph().withGraphFetched('[pets, children]')
  console.dir(myPetsMyChildren, {depth: 4})
  // -----
  cleanup()
}

run()
