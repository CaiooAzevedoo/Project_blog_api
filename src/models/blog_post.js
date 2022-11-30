'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
 
  const blogPost = sequelize.define('BlogPost',{
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    published: DataTypes.DATE,
    updated: DataTypes.DATE
  }, {
    sequelize,
    // modelName: 'blog_post',
    underscored: true,
  });
  return blogPost;
};