const db = require('../db_config');
const { createSequelizeShape } = require('../helpers/parseStatsHelpers');
const playerStats = require('../sampleData/playerGameStats');

const playerStatsSchema = createSequelizeShape(playerStats);

const PlayerProjectedGame = db.define('playerProjectedGame', playerStatsSchema);

module.exports = PlayerProjectedGame;
