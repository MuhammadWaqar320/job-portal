"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Job extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Job.belongsTo(models.Company, { foreignKey: "companyId" });
      Job.belongsToMany(models.User, {
        through: "ApplicationForJob",
        foreignKey: "jobId",
      });
    }
  }
  Job.init(
    {
      title: DataTypes.STRING,
      picture: DataTypes.STRING,
      companyId: DataTypes.INTEGER,
      location: DataTypes.STRING,
      department: DataTypes.TEXT("long"),
      description: DataTypes.STRING,
      type: DataTypes.STRING,
      lastDate: DataTypes.DATE,
      experience: DataTypes.STRING,
      salary: DataTypes.STRING,
      designation: DataTypes.STRING,
      noOfVecancies: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Job",
    }
  );
  return Job;
};
