const { DataTypes } = require('sequelize');
const sequelize = require('../database/database');
const Course = require('./course');

const Lead = sequelize.define('Lead', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phone_number: {
    type: DataTypes.STRING,
  },
  linkedin_profile: {
    type: DataTypes.STRING,
  },
  status: {
    type: DataTypes.ENUM('Accepted', 'Rejected', 'Waitlist'),
    allowNull: false,
  },
});

Lead.belongsTo(Course);
Course.hasMany(Lead);

module.exports = Lead;

