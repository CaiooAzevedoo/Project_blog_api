'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
const postCategories = sequelize.define('PostCategories',{
    postId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER
  }, {
    sequelize,
    timestamps: false,
    // modelName: 'post_categories',
    underscored: true,
  });
  return postCategories;
};