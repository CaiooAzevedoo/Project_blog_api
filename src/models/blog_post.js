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
    updated: DataTypes.DATE
  }, {
    sequelize,
    timestamps: false,
    // modelName: 'blog_post',
    underscored: true,
  });
  return blogPost;
};