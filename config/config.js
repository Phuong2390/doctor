require('dotenv').config();

module.exports = {
    services: [
        require('../http/index'),
        require('../database/index'),
        require('../src/hospital/index'),
        require('../http/middleware/hospital/filter-hospital/index'),
    ],
    database: {
        client: 'mysql',
        connection: {
            host : process.env.DB_HOST,
            user : process.env.DB_USER,
            password : process.env.DB_PASS,
            database : process.env.DB_DATA
        },
        useNullAsDefault: true
    },
    http : {
        port: process.env.HTTP_PORT || 3000
    }
};