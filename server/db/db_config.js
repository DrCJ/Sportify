const { endPoint, userName, password } = require('../config/credentials');

const Sequelize = require('sequelize');

const db = new Sequelize(endPoint, userName, password, {
  dialect: 'postgres',
});

db.sync()
	.then(() => console.log('we are connected'))
	.catch(err => console.log(`unable to connect ${err}`));

module.exports = db;
