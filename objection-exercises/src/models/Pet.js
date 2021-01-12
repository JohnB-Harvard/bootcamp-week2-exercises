const { BelongsToOneRelation } = require('./BaseModel')
const BaseModel = require('./BaseModel')

class Pet extends BaseModel {
    static get tableName(){
        return 'pets'
    }

    static get relationMappings(){
        const User = require('./User')
        return {
            user: {
                relation: BelongsToOneRelation,
                modelClass: User,
                join: {
                    from: 'pets.ownerid',
                    to: 'users.id',
                },
            },
        }
    }
}

module.exports = Pet