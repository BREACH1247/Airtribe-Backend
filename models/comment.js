const { DataTypes } = require('sequelize');
const sequelize = require('../database/database');
const Lead = require('./lead');

const Comment = sequelize.define('Comment', {
  text: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

Comment.belongsTo(Lead);
Lead.hasMany(Comment);

module.exports = Comment;
