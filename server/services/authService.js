const userRepoObj = new (require("../data/repo/userRepo"))();
const companyRepoObj = new (require("../data/repo/companyRepo"))();

const {
  generateJsonWebToken,
  successResponse,
  errorResponse,
} = require("../utils/functions");
const { HTTP_STATUS, USER_TYPE } = require("../utils/constant");

const bcrypt = require("bcryptjs");
module.exports = class AuthService {
  async authServiceFun(data) {
    const { email, password, type } = data;
    let dbResponse = {};
    console.log(data);
    if (type) {
      if (Number(type) == 1) {
        dbResponse = await userRepoObj.getUserByEmail(email);
      } else if (Number(type) == 2) {
        dbResponse = await companyRepoObj.getCompanyByEmail(email);
        if (dbResponse) {
          dbResponse.dataValues.role = "company";
        }
      }
    }
    if (dbResponse && Object.keys(dbResponse).length) {
      const isMatchPassword = await bcrypt.compare(
        password,
        dbResponse.dataValues.password
      );
      if (isMatchPassword) {
        const token = await generateJsonWebToken({
          email: email,
          password: password,
        });
        return successResponse(
          { token: token, userInfo: dbResponse.dataValues },
          HTTP_STATUS.OK,
          "logged in"
        );
      } else {
        return errorResponse(
          HTTP_STATUS.UNAUTHORIZED,
          "sorry invalid credentials",
          []
        );
      }
    } else {
      return errorResponse(
        HTTP_STATUS.UNAUTHORIZED,
        "sorry invalid credentials something wrong",
        []
      );
    }
  }
};
