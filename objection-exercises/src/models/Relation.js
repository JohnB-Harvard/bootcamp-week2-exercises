const { ManyToManyRelation } = require('./BaseModel')
const BaseModel = require('./BaseModel')

class Relation extends BaseModel {
    static get tableName(){
        return 'relations'
    }

    static get relationMappings(){
        return
    }
}