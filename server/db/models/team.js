const db = require('../db_config');
const Sequelize = require('sequelize');
const { createSequelizeShape } = require('../helpers/parseStatsHelpers');
const TeamSampleData = require('../sampleData/team');

const TeamSchema = createSequelizeShape(TeamSampleData);
const mergedSchema = Object.assign({
  name: Sequelize.STRING,
}, TeamSchema);

const Team = db.define('team', mergedSchema);

module.exports = Team;
