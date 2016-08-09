const db = require('../db_config');
const Sequelize = require('sequelize');
const { createSequelizeShape } = require('../helpers/parseStatsHelpers');
const playerGeneralInfoSample = require('../sampleData/playerGeneralInfoSample');
const playerGameSchema = require('../sampleData/playerGameSchema');

const playerGeneralSchema = createSequelizeShape(playerGeneralInfoSample);
const mergedPlayerSchema = Object.assign({
  twitterID: Sequelize.STRING,
}, playerGeneralSchema, playerGameSchema);

const Player = db.define('player', mergedPlayerSchema);

module.exports = Player;
