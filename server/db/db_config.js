const { endPoint, userName, password, port } = require('../config/credentials');

const Sequelize = require('sequelize');

const db = new Sequelize('nflsportify', userName, password, {
  dialect: 'postgres',
  host: endPoint,
  port,
});

module.exports = db;
