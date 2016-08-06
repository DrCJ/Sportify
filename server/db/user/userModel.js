const db = require('../db_config');
const Sequelize = require('sequelize');

const User = db.define('user', {
  yahooID: {
    type: Sequelize.STRING,
    required: true,
  },
  username: {
    type: Sequelize.STRING,
    required: true,
  },
  name: {
    type: Sequelize.STRING,
  },
});

module.exports = User;


