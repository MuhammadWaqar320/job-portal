"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("applicationforjobs", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      address: {
        type: Sequelize.STRING,
      },
      education: {
        type: Sequelize.STRING,
      },
      experience: {
        type: Sequelize.STRING,
      },
      expectedSalary: {
        type: Sequelize.STRING,
      },
      jobSeekerId: {
        type: Sequelize.INTEGER,
        references: { model: "users", key: "id" },
      },
      jobId: {
        type: Sequelize.INTEGER,
        references: { model: "jobs", key: "id" },
      },
      cv: {
        type: Sequelize.STRING,
      },
      specialization: {
        type: Sequelize.STRING,
      },
      comment: {
        type: Sequelize.STRING,
      },
      dob: { type: Sequelize.DATEONLY },
      gender: { type: Sequelize.STRING },
      postcode: { type: Sequelize.STRING },
      cnic: {
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("applicationforjobs");
  },
};
