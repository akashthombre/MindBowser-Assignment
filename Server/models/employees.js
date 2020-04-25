const Sequelize = require('sequelize');
const db = require('../db_config')

module.exports = db.sequelize.define('tbl_employees', {
    empid : Sequelize.CHAR,
    first_name: Sequelize.CHAR,
    last_name: Sequelize.CHAR,
    address: Sequelize.CHAR,
    dob: Sequelize.CHAR,
    mobile : Sequelize.BIGINT,
    city : Sequelize.CHAR
},
    {
        timestamps: false
    }
);

