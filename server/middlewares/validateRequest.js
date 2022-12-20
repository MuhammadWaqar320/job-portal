const {
  validationResult,
} = require("express-validator");
const { HTTP_STATUS } = require("../utils/constant");
const validateRequestMiddleWare = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }
  return res.status(HTTP_STATUS.BAD_REQUEST).send({ errors:errors.array() });
};
module.exports = {
    validateRequestMiddleWare
}