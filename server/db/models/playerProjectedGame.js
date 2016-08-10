const db = require('../db_config');
const { createSequelizeShape } = require('../helpers/parseStatsHelpers');
const playerStats = require('../sampleData/playerProjectedStats');

const playerGeneralSchema = createSequelizeShape(playerStats);

const PlayerYearStat = db.define('playerProjectedGame', playerGeneralSchema);

module.exports = PlayerYearStat;
