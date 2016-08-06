const db = require('../db_config');
// const Sequelize = require('sequelize');
const playerGameStats = require('../sampleData/playerGameStats');
const { createSequelizeShape } = require('../helpers/parseStatsHelpers');

const playerGameShape = createSequelizeShape(playerGameStats);

const PlayerGame = db.define('playerGame', playerGameShape);

module.exports = PlayerGame;
