const db = require('../db_config');
const { createSequelizeShape } = require('../helpers/parseStatsHelpers');
const teamStats = require('../sampleData/playerGameStats');

const teamGeneralSchema = createSequelizeShape(teamStats);
const TeamGame = db.define('team_game', teamGeneralSchema);

module.exports = TeamGame;
