exports.up = async knex => knex.schema.createTable('posts', table => {
    table
        .uuid('id')
        .notNullable()
        .primary()
        .unique()
        .defaultTo(knex.raw('uuid_generate_v4()'))
    table.uuid('user_id').references('users.id').notNullable()
    table.string('date_posted')
    table.integer('num_likes')
})

exports.down = async knex => knex.schema.dropTableIfExists('posts')
