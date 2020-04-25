const Sequelize = require('sequelize');
const db = {};

const sequelize = new Sequelize('mysql://root:admin@localhost:3306/akashdb', {
  operatorsAliases: 0
})

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports =  db