const { Sequelize, DataTypes } = require('sequelize');

const dbConfig = require('../database/config_bbdd');

const sequelize = new Sequelize(
    dbConfig.database,
    dbConfig.username,
    dbConfig.password, {
        host:dbConfig.host,
        dialect:dbConfig.dialect
    }
)



const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.carreras = require('./carrerasModel.js')(sequelize, DataTypes)
//db.reviews = require('./reviewModel.js')(sequelize, DataTypes)

db.sequelize.sync({ force: false })
.then(() => {
    console.log('yes re-sync done!')
})


module.exports = db