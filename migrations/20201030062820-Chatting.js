'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Chatting', { 
      id: Sequelize.INTEGER,
      createdAt: {
        type: Sequelize.DATE,
      },
      updatedAt: {
          type: Sequelize.DATE,
      }, 
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Chatting');
  }
};
