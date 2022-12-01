'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
const postCategories = sequelize.define('PostCategories',{
    post_id: DataTypes.INTEGER,
    category_id: DataTypes.INTEGER
  }, {
    sequelize,
    timestamps: false,
    // modelName: 'post_categories',
    underscored: true,
  });
  return postCategories;
};