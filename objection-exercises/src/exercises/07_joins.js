const cleanup = require('../lib/cleanup')
// Import models

const run = async () => {
  const User = require('../models/User')
  // Write Queries and Logs Here !!!

  // Get all users and their pets
  const usersPets = await User.query().withGraphFetched('pets')
  console.dir(usersPets, {depth: 2})
  // Get all users, their pets, AND their children
  const usersPetsChildren = await User.query().withGraphFetched('[pets, children]')
  console.dir(usersPetsChildren, {depth: 2})
  // Get all users, their parents, and their grandparents
  const userParentsGrandparents = await User.query().withGraphFetched('[parents,parents.parents]')
  console.dir(userParentsGrandparents, {depth: 2})
  // Get all users, their pets, their chilren, and their childrens' pets
  const usersChildrenChildPets = await User.query().withGraphFetched('[children, children.pets]')
  console.dir(usersChildrenChildPets, {depth: 5})
  // -----
  cleanup()
}

run()
