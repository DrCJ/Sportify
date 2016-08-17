const db = require('../db_config');
const { createSequelizeShape } = require('../helpers/parseStatsHelpers');
const teamStats = require('../sampleData/playerGameStats');

const teamGeneralSchema = createSequelizeShape(teamStats);

const TeamYearStat = db.define('team_year_stat', teamGeneralSchema);

module.exports = TeamYearStat;
