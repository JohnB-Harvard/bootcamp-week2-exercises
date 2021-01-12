exports.up = async knex => knex.schema.createTable('users', table => {
    table
        .uuid('id')
        .notNullable()
        .primary()
        .unique()
        .defaultTo(knex.raw('uuid_generate_v4()'))
    table
        .string('email')
        .unique()
        .notNullable()
    table
        .text('Bio')
    table.string('DOB')
    table.string('date_created')
    table.enum('status', ['online', 'away', 'offline'])
    table.string('password')
    table.string('first_name')
    table.string('last_name')
    table.string('nickname')
})

exports.down = async knex => knex.schema.dropTableIfExists('users')

