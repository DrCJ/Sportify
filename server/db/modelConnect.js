const User = require('./user/userModel');
const Player = require('./models/player');
const Team = require('./models/team');

Player.belongsTo(Team);
Team.hasMany(Player);

// module.exports = {}