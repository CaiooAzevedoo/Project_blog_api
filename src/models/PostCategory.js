'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
const postCategories = sequelize.define('PostCategory',
{
  postId: DataTypes.INTEGER,
  categoryId: DataTypes.INTEGER}, 
{
    timestamps: false,
    // modelName: 'post_categories',
    underscored: true,
  });

  postCategories.associate = ({ BlogPost, Category }) => {
    BlogPost.belongsToMany(Category, {
      as: 'BlogPosts',
      through: postCategories,
      foreignKey: 'post_id',
      otherKey: 'category_id',
    })
    Category.belongsToMany(BlogPost, {
      as: 'Categories',
      through: postCategories,
      foreignKey: 'category_id',
      otherKey: 'post_id',
    })
  }
  return postCategories;
};