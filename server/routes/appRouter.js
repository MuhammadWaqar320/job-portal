const express = require("express");
const router = express.Router();
const { userValidationFun } = require("../middlewares/userValidation");
const {
  createUserFun,
  getAllUserByTypeFun,
  getAllUserFun,
  getUserByEmailFun,
  getUserByIdFun,
  updateUserFun,
  deleteUserByIdFun,
} = require("../controllers/userController");
const {userLoginFun}=require("../controllers/authController")
const { validateRequestMiddleWare } = require("../middlewares/validateRequest");
const { body, check } = require("express-validator");
// user routes
router.post(
  "/user/create",
  userValidationFun(),
  validateRequestMiddleWare,
  createUserFun
);
router.post("/user/login",userLoginFun)
module.exports = {
  router,
};
