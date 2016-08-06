const db = require('../db_config');
const Sequelize = require('sequelize');
const Player = require('./player');

const Team = db.define('team', {
  name: {
    type: Sequelize.STRING,
  },
});


module.exports = Team;