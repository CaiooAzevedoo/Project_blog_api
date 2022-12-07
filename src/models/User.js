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
    displayName: {
      type: DataTypes.STRING(255),
      validate: {
        notEmpty: {
          msg: "Some required fields are missing",
        },
        customValidatorLength(value) {
          if(value < 9) {
            throw new Error("\"displayName\" length must be at least 8 characters long");
          }
        }
      },        
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: false,
      validate: {
        isEmail: {
          msg: "\"email\" must be a valid email",
        },
        notEmpty: {
          msg: "Some required fields are missing",
        }
      }
    },
    password: {
      type: DataTypes.STRING(255),
      validate: {
        min: {
          args:6, 
          msg: "\"password\" length must be at least 6 characters long"
        }
      }
    },
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