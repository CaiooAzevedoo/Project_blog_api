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
    underscored: true,
    tableName: 'posts_categories'
  });

  postCategories.associate = ({ BlogPost, Category }) => {
    BlogPost.belongsToMany(Category, {
      as: 'categories',
      through: postCategories,
      foreignKey: 'post_id',
      otherKey: 'category_id',
    })
    Category.belongsToMany(BlogPost, {
      as: 'posts',
      through: postCategories,
      foreignKey: 'category_id',
      otherKey: 'post_id',
    })
  }
  return postCategories;
};