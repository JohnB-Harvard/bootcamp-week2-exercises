const casual = require('casual')
const userData = require('./00_users')
const postData = require('./01_posts')

casual.define('comment', (postId,userId) => ({
  id: casual.uuid,
  commenter_id: userId,
  post_id: postId,
  comment: casual.short_description,
}))

const commentData = []

for (let i = 0; i < 20; ++i) {
  userId = casual.random_element(userData).id
  postId = casual.random_element(postData).id
  commentData.push(casual.comment(postId,userId))
}

module.exports = commentData
