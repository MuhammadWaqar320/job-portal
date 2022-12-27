"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("jobs", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        type: Sequelize.STRING,
      },
      picture: {
        type: Sequelize.STRING,
      },
      location: {
        type: Sequelize.STRING,
      },
      department: {
        type: Sequelize.STRING,
      },
      description: {
        type: Sequelize.STRING,
      },
      type: {
        type: Sequelize.STRING,
      },
      companyId: {
        type: Sequelize.INTEGER,
        references: { model: "companies", key: "id" },
      },
      lastDate: {
        type: Sequelize.DATEONLY,
      },
      salary: {
        type: Sequelize.STRING,
      },
      designation: {
        type: Sequelize.STRING,
      },
      experience: {
        type: Sequelize.STRING,
      },
      noOfVecancies: {
        type: Sequelize.INTEGER,
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("jobs");
  },
};
