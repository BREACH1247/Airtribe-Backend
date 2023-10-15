const { DataTypes } = require('sequelize');
const sequelize = require('../database/database');
const Instructor = require('./instructor');

const Course = sequelize.define('Course', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  maxSeats: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  startDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  instructorId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

Course.belongsTo(Instructor, {
  foreignKey: 'instructorId',
});
Instructor.hasMany(Course, {
  foreignKey: 'instructorId',
});

module.exports = Course;
