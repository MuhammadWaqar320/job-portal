const UserServiceObj = new (require("../services/userService"))();
const { constructResponse } = require("../utils/functions");
const createUserFun = async (req, res) => {
  const responseData = await UserServiceObj.createUserService(req.body);
  return constructResponse(res, responseData);
};
const getAllUserFun = (req, res) => {};
const getAllUserByTypeFun = (req, res) => {};
const getUserByEmailFun = (req, res) => {};
const getUserByIdFun = (req, res) => {};
const deleteUserByIdFun = (req, res) => {};
const updateUserFun = (req, res) => {};
module.exports = {
  createUserFun,
  getAllUserByTypeFun,
  getAllUserFun,
  getUserByEmailFun,
  getUserByIdFun,
  updateUserFun,
  deleteUserByIdFun,
};
