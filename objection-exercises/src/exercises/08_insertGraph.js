const cleanup = require('../lib/cleanup')
// Import models

const run = async () => {
  const User = require('../models/User')
  // Write Queries and Logs Here !!!

  // Insert a new person name Peter Bynum with two pet DOGs named Rocco & Rosey
  const Peter = await User.query().insertGraph({
    firstName: 'Peter',
    lastName: 'Bynum',
    email: 'Peter.Bynum@gmail.com',
    pets: [
      {
        name: 'Rocco',
        type: 'DOG',
      },
      {
        name: 'Rosey',
        type: 'DOG',
      },
    ],
  })
  console.dir(Peter, {depth: 5})
  // -----
  cleanup()
}

run()
