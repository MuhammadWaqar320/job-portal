"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.changeColumn("jobs", "description", {
      type: Sequelize.TEXT("long"),
    });
    await queryInterface.changeColumn("companies", "description", {
      type: Sequelize.TEXT("long"),
    });
    await queryInterface.changeColumn("applicationforjobs", "comment", {
      type: Sequelize.TEXT("long"),
    });
  },
};
