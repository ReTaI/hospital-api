'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Patients', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      fullname: {
        type: Sequelize.STRING,
      },
      doctor: {
        type: Sequelize.STRING,
      },
      room: {
        type: Sequelize.INTEGER,
      },
      dateStart: {
        type: Sequelize.STRING,
      },
      dateEnd: {
        type: Sequelize.STRING,
      },
      diagnoses: {
        type: Sequelize.STRING,
      },
      simptomes: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Patients');
  },
};