const { Sequelize } = require('sequelize');

const dotenv = require('dotenv').config();
// obtener variables de entorno

const  sequelize  = new Sequelize(
    database=process.env.BD_DATABASE,
    username=process.env.BD_USERNAME,
    password=process.env.BD_PASSWORD, {
        host:process.env.BD_HOST,
        dialect:process.env.BD_DIALECT
    }
);

/*
const  sequelize  = new Sequelize(
    database.database,
    database.username,
    database.password, {
        host:database.host,
        dialect:database.dialect
    }
);
*/
module.exports = sequelize;

