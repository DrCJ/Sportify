const Sequelize = require('sequelize');

const createSequelizeShape = (object) => {
  const newObject = {};
  for (const k in object) {
    if (typeof newObject[k] === 'number') {
      newObject[k] = Sequelize.INTEGER;
    }
    // should be a string
    newObject[k] = Sequelize.STRING;
  }
  return newObject;
};
module.exports = {
  createSequelizeShape,
};
