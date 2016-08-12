const db = require('../db_config');
const { createSequelizeShape } = require('../helpers/parseStatsHelpers');
const playerStats = require('../sampleData/playerProjectedStats');

const playerGeneralSchema = createSequelizeShape(playerStats);

const PlayerProjectedGame = db.define('playerProjectedGame', playerGeneralSchema);

module.exports = PlayerProjectedGame;
