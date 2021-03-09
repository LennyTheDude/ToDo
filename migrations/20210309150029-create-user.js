'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
    await queryInterface.addColumn(
      'Tasks',
      'ownerId',
      Sequelize.INTEGER
    );
  },
  
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Users');
    await queryInterface.removeColumn(
      'Tasks',
      'ownerId'
    );
  }
};