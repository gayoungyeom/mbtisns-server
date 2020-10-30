'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Comment', { 
      id: Sequelize.INTEGER,
      createdAt: {
        type: Sequelize.DATE,
      },
      updatedAt: {
          type: Sequelize.DATE,
      },
      text: {
          type: Sequelize.TEXT,
          allowNull: false
      },
    });
    
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Comment');
  }
};
