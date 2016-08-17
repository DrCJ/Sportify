const db = require('../db_config');
const { createSequelizeShape } = require('../helpers/parseStatsHelpers');
const teamStats = require('../sampleData/playerGameStats');

const teamStatSchema = createSequelizeShape(teamStats);

const TeamProjectedGame = db.define('team_projected_game', teamStatSchema);

module.exports = TeamProjectedGame;
