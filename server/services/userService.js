const { HashPasswordUsingBcryptjs } = require("../utils/functions");
const { errorResponse, successResponse } = require("../utils/functions");
const { HTTP_STATUS } = require("../utils/constant");
const bcrypt =require("bcryptjs")
const userRepoObj = new (require("../data/repo/userRepo"))();
module.exports = class UserService {
  async getAllUserService() {
    try {
      const dbResponse = await userRepoObj.getAllUser();
      return successResponse(dbResponse, HTTP_STATUS.OK, "all data fetched");
    } catch (error) {
      return errorResponse(HTTP_STATUS.INTERNAL_SERVER_ERROR, error.message);
    }
  }
  async getUserByIdService(id) {
    try {
      const dbResponse = await userRepoObj.getUserById(id);
      return dbResponse
        ? successResponse(
            dbResponse.dataValues,
            HTTP_STATUS.OK,
            " data fetched"
          )
        : successResponse([], HTTP_STATUS.NOT_FOUND, "user is not exist");
    } catch (error) {
      return errorResponse(HTTP_STATUS.INTERNAL_SERVER_ERROR, error.message);
    }
  }
  async deleteUserByIdService(id) {
    try {
      const dbResponse = await userRepoObj.deleteUserById(id);
      return dbResponse
        ? successResponse([], HTTP_STATUS.OK, "data deleted successfully")
        : successResponse([], HTTP_STATUS.NOT_FOUND, "User is not exist");
    } catch (error) {
      return errorResponse(HTTP_STATUS.INTERNAL_SERVER_ERROR, error.message);
    }
  }
  async changeAdminPasswordInfo(data, id) {
    const { new_password, old_password } = data;
    const { dataValues } = await userRepoObj.getUserById(id);
    const isMatchPassword = await bcrypt.compare(
      old_password,
      dataValues.password
    );
    if (isMatchPassword) {
      const password = await HashPasswordUsingBcryptjs(new_password);
      const result = await userRepoObj.updateUser({ password: password }, id);
      return successResponse(result, HTTP_STATUS.OK, "password updated");
    } else {
      return errorResponse(HTTP_STATUS.OK, "wrong password",{success:false});
    }
  }
  async createUserService(userData) {
    const hashedPassword = await HashPasswordUsingBcryptjs(userData.password);
    const newUser = {
      name: userData.name,
      email: userData.email,
      password: hashedPassword,
      city: userData.city,
      role: userData.role,
      phone_number: userData.phoneNumber,
    };
    try {
      const isExist = await userRepoObj.getUserByEmail(userData.email);
      if (isExist) {
        return errorResponse(
          HTTP_STATUS.CONFLICT,
          "user is already registered"
        );
      } else {
        try {
          const dbResponse = await userRepoObj.createUser(newUser);
          return successResponse(
            dbResponse.dataValues,
            HTTP_STATUS.CREATED,
            "new user has added successfully"
          );
        } catch (error) {
          return errorResponse(
            HTTP_STATUS.INTERNAL_SERVER_ERROR,
            error.message
          );
        }
      }
    } catch (error) {
      return errorResponse(HTTP_STATUS.INTERNAL_SERVER_ERROR, error.message);
    }
  }
};
