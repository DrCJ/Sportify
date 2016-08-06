const { endPoint, userName, password, port } = require('../config/credentials');

const Sequelize = require('sequelize');

const db = new Sequelize('nflsportify', userName, password, {
  dialect: 'postgres',
  host: endPoint,
  port,
});

db.sync()
    .then(() => console.log('we are connected'))
    .catch(err => console.log(`unable to connect ${err}`));

module.exports = db;
