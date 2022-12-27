"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ApplicationForJob extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ApplicationForJob.belongsTo(models.Job, { foreignKey: "jobId" });
      ApplicationForJob.belongsTo(models.User, { foreignKey: "jobSeekerId" });

    }
  }
  ApplicationForJob.init(
    {
      address: DataTypes.STRING,
      education: DataTypes.STRING,
      experience: DataTypes.STRING,
      expectedSalary: DataTypes.STRING,
      jobSeekerId: {
        type: DataTypes.INTEGER,
        references: {
          model: "User",
          key: "id",
        },
      },
      jobId: {
        type: DataTypes.INTEGER,
        references: {
          model: "Job",
          key: "id",
        },
      },
      cv: DataTypes.STRING,
      specialization: DataTypes.STRING,
      comment: DataTypes.STRING,
      dob: DataTypes.DATEONLY,
      gender: DataTypes.STRING,
      postcode: DataTypes.STRING,
      cnic: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "ApplicationForJob",
    }
  );
  return ApplicationForJob;
};
