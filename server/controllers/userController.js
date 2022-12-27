const UserServiceObj = new (require("../services/userService"))();
const { constructResponse } = require("../utils/functions");
const createUserFun = async (req, res) => {
  const responseData = await UserServiceObj.createUserService(req.body);
  return constructResponse(res, responseData);
};
const getAllUserFun = async (req, res) => {
  const responseData = await UserServiceObj.getAllUserService();
  return constructResponse(res, responseData);
};
const getUserByIdFun = async (req, res) => {
  const responseData = await UserServiceObj.getUserByIdService(req.params.id);
  return constructResponse(res, responseData);
};
const deleteUserByIdFun = async (req, res) => {
  const responseData = await UserServiceObj.deleteUserByIdService(req.params.id);
  return constructResponse(res, responseData);
};
module.exports = {
  createUserFun,
  getAllUserFun,
  getUserByIdFun,
  deleteUserByIdFun,
};
