const db = require('../db_config');
const Sequelize = require('sequelize');
// const Team = require('./team');

const Player = db.define('player', {
  twitterID: {
    type: Sequelize.STRING,
  },
  name: {
    type: Sequelize.STRING,
  },
  photoURL: {
    type: Sequelize.STRING,
  },
});


module.exports = Player;