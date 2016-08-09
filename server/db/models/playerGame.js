const db = require('../db_config');
const playerGameSchema = require('../sampleData/playerGameSchema');

const PlayerGame = db.define('playerGame', playerGameSchema);

module.exports = PlayerGame;
