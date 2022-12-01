'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.init('User',{
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    display_name: DataTypes.STRING(255),
    email: DataTypes.STRING(255),
    password: DataTypes.STRING(255),
    image: DataTypes.STRING(255)
  }, {
    sequelize,
    timestamps: false,
    // modelName: 'user',
    underscored: true,
  });

  user.associate = (models) => {
    user.hasMany(models.BlogPost, {
      as: 'blogPosts',
      foreignKey: 'userId'
    })
  }

  return user;
};