'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   await queryInterface.createTable('User', { 
      id: Sequelize.INTEGER,
      firstName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      lastName: {
          type: Sequelize.STRING,
          allowNull: false,
      },
      email: {
          type: Sequelize.STRING,
          allowNull: false,
      },
      password: {
          type: Sequelize.STRING,
          allowNull: false,
      },
      phoneNumber: {
          type: Sequelize.STRING,
          allowNull: false,
      },
      mbtiType: {
          type: Sequelize.STRING,
          allowNull: false,
      },
      isVerified: {
          type: Sequelize.BOOLEAN,
          allowNull: false,
      },
      profileImg: {
          type: Sequelize.JSON,
      },
      nickName: {
          type: Sequelize.STRING,
      },
      gender: {
          type: Sequelize.BOOLEAN,
      }
    });  
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('User');
  }
};
