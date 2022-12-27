const { HashPasswordUsingBcryptjs } = require("../utils/functions");
const { errorResponse, successResponse } = require("../utils/functions");
const { HTTP_STATUS } = require("../utils/constant");
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
  async createUserService(userData) {
    const hashedPassword = await HashPasswordUsingBcryptjs(userData.password);
    const newUser = {
      name: userData.name,
      email: userData.email,
      password: hashedPassword,
      city: userData.city,
      role: userData.role,
      phoneNumber: userData.phoneNumber,
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
