'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Locations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model: 'Users'}
      },
      address: {
        allowNull: false,
        type: Sequelize.STRING(200)
      },
      city: {
        allowNull: false,
        type: Sequelize.STRING(200)
      },
      state: {
        allowNull: false,
        type: Sequelize.STRING(200)
      },
      country: {
        allowNull: false,
        type: Sequelize.STRING(200)
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING(200)
      },
      price: {
        allowNull: false,
        type: Sequelize.INTEGER
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
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Locations');
  }
};
