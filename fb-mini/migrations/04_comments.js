exports.up = async knex => knex.schema.createTable('comments', table => {
    table
        .uuid('id')
        .notNullable()
        .primary()
        .unique()
        .defaultTo(knex.raw('uuid_generate_v4()'))
    table.uuid('post_id').references('posts.id')
    table.uuid('commenter_id').references('users.id')
    table.text('comment')
})

exports.down = async knex => knex.schema.dropTableIfExists('comments')
