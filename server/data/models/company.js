"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Company extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Company.hasMany(models.Job);
    }
  }
  Company.init(
    {
      name: DataTypes.STRING,
      logo: DataTypes.STRING,
      no_of_department: DataTypes.INTEGER,
      description: DataTypes.STRING,
      address: DataTypes.STRING,
      website: DataTypes.STRING,
      phoneNo: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      registeredNo: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Company",
    }
  );
  return Company;
};
