'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Post', { 
      id: Sequelize.INTEGER,
      createdAt: {
        type: Sequelize.DATE,
      },
      updatedAt: {
          type: Sequelize.DATE,
      },
      boardType: {
          type: Sequelize.STRING,
          allowNull: false
      },
      title: {
          type: Sequelize.STRING,
          allowNull: false
      },
      contentText: {
          type: Sequelize.TEXT,
          allowNull: false
      },
      contentImg: {
          type: Sequelize.JSON,
      },
      like: {
          type: Sequelize.INTEGER,
      } 
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Post');
  }
};
