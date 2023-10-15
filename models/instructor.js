const { DataTypes } = require('sequelize');
const sequelize = require('../database/database');

const Instructors = sequelize.define('Instructors', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});


module.exports = Instructors;
