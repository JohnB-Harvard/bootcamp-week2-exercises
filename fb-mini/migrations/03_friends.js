exports.up = async knex => knex.schema.createTable('friends', table => {
    table
        .uuid('id')
        .notNullable()
        .primary()
        .unique()
        .defaultTo(knex.raw('uuid_generate_v4()'))
    table.uuid('requester').references('users.id').notNullable()
    table.uuid('requested').references('users.id').notNullable()
    table.string('date_requested')
    table.integer('intensity')
    table.enum('status', ['requested', 'accepted', 'declined'])
})

exports.down = async knex => knex.schema.dropTableIfExists('friends')
