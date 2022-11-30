'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const categorie = sequelize.define('Categorie',{
    name: DataTypes.STRING
  }, {
    sequelize,
    // modelName: 'categories',
    underscored: true,
  });
  return categorie;
};