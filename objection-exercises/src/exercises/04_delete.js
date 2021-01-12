const cleanup = require('../lib/cleanup')
// Import models

const run = async () => {
  const Pet = require('../models/Pet')
  // Write Queries and Logs Here !!!

  // Delete all CATS
  const cats = await Pet.query().delete().where('type','CAT')
  console.log(cats)
  const remainder = await Pet.query().where('type', 'CAT')
  console.log(remainder)
  // -----
  cleanup()
}

run()
