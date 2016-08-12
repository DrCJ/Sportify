const db = require('../db_config');
const Sequelize = require('sequelize');
const { createSequelizeShape } = require('../helpers/parseStatsHelpers');
const gameSample = require('../sampleData/gameSample');

const gameSchema = createSequelizeShape(gameSample);
const Game = db.define('game', gameSchema);

module.exports = Game;
