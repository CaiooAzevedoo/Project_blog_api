'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
 
  const blogPost = sequelize.define('BlogPost',{
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    published: DataTypes.DATE,
    updated: DataTypes.DATE,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    timestamps: false,
    underscored: true,
  });

  blogPost.associate = (models) => {
    blogPost.belongsTo(models.User, {
      as: 'user',
      foreignKey: 'userId'
    })
  }
  return blogPost;
};