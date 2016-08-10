const Sequelize = require('sequelize');

const createSequelizeShape = (object) => {
  const newObject = {};
  for (const k in object) {
    if (typeof object[k] === 'number') {
      newObject[k] = Sequelize.INTEGER;
    } else {
      newObject[k] = Sequelize.STRING;
    }
  }
  return newObject;
};
module.exports = {
  createSequelizeShape,
};
