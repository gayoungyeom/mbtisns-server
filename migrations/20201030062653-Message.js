'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Message', { 
      id: Sequelize.INTEGER,
      createdAt: {
        type: Sequelize.DATE,
      },
      message: {
          type: Sequelize.TEXT,
      },
      userId: {
          type: Sequelize.INTEGER,
          allowNull: false
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Message');  
  }
};
