const db = require('../db_config');
const playerProjectedGameStat = require('../sampleData/playerProjectedGameStat');
const { createSequelizeShape } = require('../helpers/parseStatsHelpers');

const playerProjectedGameSchema = createSequelizeShape(playerProjectedGameStat);

const PlayerProjectedGame = db.define('playerProjectedGame', playerProjectedGameSchema);

module.exports = PlayerProjectedGame;
