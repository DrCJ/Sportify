const db = require('../db_config');
const { createSequelizeShape } = require('../helpers/parseStatsHelpers');
const teamStats = require('../sampleData/playerGameStats');

const teamStatSchema = createSequelizeShape(teamStats);

const TeamProjectedYear = db.define('team_projected_year', teamStatSchema);

module.exports = TeamProjectedYear;
