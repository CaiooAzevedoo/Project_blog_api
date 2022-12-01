'use strict';

const sequelize = require("sequelize");

module.exports = {
  up: async (queryInterface, Sequelize) => {
  await queryInterface.addColumn('blog_posts', 'user_id', { 
      type: sequelize.INTEGER,
      references: {
        model: 'users',
        key: 'id'
      },
      allowNull: false,
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
  });
  },

  down: async (queryInterface, _Sequelize) => {

     await queryInterface.removeColumn('blog_posts', 'user_id');
 
  }
};
