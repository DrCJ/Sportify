const db = require('../db_config');
const { createSequelizeShape } = require('../helpers/parseStatsHelpers');
const playerStats = require('../sampleData/playerGameStats');

const playerGeneralSchema = createSequelizeShape(playerStats);

const PlayerYearStat = db.define('playerYearStat', playerGeneralSchema);

module.exports = PlayerYearStat;
