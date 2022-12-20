const { body, validationResult } = require("express-validator");
const validator = require("validator");
const { USER_TYPE } = require("../utils/constant");
const userValidationFun = () => {
  const isEmail = body("email")
    .isEmail()
    .withMessage("Email should be valid format");
  const isValidName = body("name")
    .isLength({ max: 30, min: 4 })
    .withMessage("Name length should be 4 to 30")
    .custom((name) => {
      if (!validator.isNumeric(name)) {
        return true;
      }
      return false;
    })
    .withMessage("Name can not only numeric");
  const isPasswordValid = body("password")
    .isLength({ max: 20, min: 4 })
    .withMessage("length should be 4 to 30");
  const isPhoneNumber = body("phoneNumber")
    .isMobilePhone()
    .withMessage("Phone Number should be valid format");
  const checkRole = body("role")
    .custom((role) => {
      if (role == USER_TYPE.ADMIN || role == USER_TYPE.CUSTOMER) {
        return true;
      }
      return false;
    })
    .withMessage("User Type should be valid(customer or admin)");
  return [isEmail, isValidName, isPasswordValid, isPhoneNumber, checkRole];
};
module.exports = {
  userValidationFun,
};
