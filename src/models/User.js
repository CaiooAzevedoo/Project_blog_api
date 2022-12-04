'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User',{
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    displayName: DataTypes.STRING(255),
    email: DataTypes.STRING(255),
    password: DataTypes.STRING(255),
    image: DataTypes.STRING(255)
  }, {
    sequelize,
    timestamps: false,
    underscored: true,
  });

  User.associate = (models) => {
    User.hasMany(models.BlogPost, {
      as: 'BlogPost',
      foreignKey: 'userId'
    })
  }

  return User;
};