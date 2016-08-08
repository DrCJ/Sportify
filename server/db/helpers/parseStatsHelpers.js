const Sequelize = require('sequelize');

const createSequelizeShape = (object) =>
  object.filter(value => typeof value !== 'object')
  .map(value => {
    if (typeof value === 'number') {
      return Sequelize.INTEGER;
    }
    // should be a string
    return Sequelize.STRING;

    //do DateTime, check w/ regex
  });

module.exports = {
  createSequelizeShape,
};
