const { HashPasswordUsingBcryptjs } = require("../utils/functions");
const { errorResponse, successResponse } = require("../utils/functions");
const { HTTP_STATUS } = require("../utils/constant");
const userRepoObj = new (require("../data/repo/userRepo"))();
module.exports = class UserService {
  async getAllUserService() {}
  async getAllUserByTypeService() {}
  async getUserByIdService() {}
  async getUserByEmailService() {}
  async updateUserService() {}
  async deleteUserByIdService() {}
  async createUserService(userData) {
    const hashedPassword = await HashPasswordUsingBcryptjs(userData.password);
    const newUser = {
      name: userData.name,
      email: userData.email,
      password: hashedPassword,
      country: userData.country,
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
