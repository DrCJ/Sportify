const db = require('../db_config');
// const Sequelize = require('sequelize');
const playerStats = require('../sampleData/playerGameSchema');

const PlayerYearStat = db.define('playerYearStat', playerStats);

module.exports = PlayerYearStat;
