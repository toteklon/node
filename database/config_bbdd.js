const dotenv = require('dotenv').config();

module.exports = {
        username:process.env.BD_USERNAME,
        password:process.env.BD_PASSWORD,
        database:process.env.BD_DATABASE,
        host:process.env.BD_HOST,
        dialect:process.env.BD_DIALECT
}
