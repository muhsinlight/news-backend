const sequelize = require('../config/db');
const User = require('./User');

const connectDb = async () => {
  try {
    await sequelize.authenticate();
    console.log('MySQL connection successful.');
    await sequelize.sync({ alter: true });
    console.log('Database synchronized.');
  } catch (error) {
    console.error('Database error:', error);
  }
};

module.exports = {
  sequelize,
  User,
  connectDb
};
