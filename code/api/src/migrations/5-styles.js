'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('styles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      image: {
        type: Sequelize.STRING
      },
      gender: {
        type: Sequelize.INTEGER
      }
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('styles');
  }
};
