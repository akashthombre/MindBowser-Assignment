const Sequelize = require('sequelize');
const db = require('../db_config')

module.exports = db.sequelize.define('tbl_managers', {
    first_name: Sequelize.CHAR,
    last_name: Sequelize.CHAR,
    email: Sequelize.CHAR,
    password: Sequelize.CHAR,
    address: Sequelize.CHAR,
    company: Sequelize.CHAR,
},
    {
        timestamps: false
    }
);

