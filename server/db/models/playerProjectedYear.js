const db = require('../db_config');
const { createSequelizeShape } = require('../helpers/parseStatsHelpers');
const playerStats = require('../sampleData/playerProjectedStats');

const playerStatSchema = createSequelizeShape(playerStats);

const PlayerProjectedYear = db.define('playerProjectedYear', playerStatSchema);

module.exports = PlayerProjectedYear;
