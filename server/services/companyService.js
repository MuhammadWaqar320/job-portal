const { errorResponse, successResponse } = require("../utils/functions");
const bcrypt=require("bcryptjs")
const { HTTP_STATUS } = require("../utils/constant");
const CompanyRepoObj = new (require("../data/repo/companyRepo"))();
const { HashPasswordUsingBcryptjs } = require("../utils/functions");
module.exports = class CompanyService {
  async getAllCompanyService() {
    try {
      const dbResponse = await CompanyRepoObj.getAllCompany();
      return successResponse(dbResponse, HTTP_STATUS.OK, "all data fetched");
    } catch (error) {
      return errorResponse(HTTP_STATUS.INTERNAL_SERVER_ERROR, error.message);
    }
  }
  async getCompanyByIdService(id) {
    try {
      const dbResponse = await CompanyRepoObj.getCompanyById(id);
      return dbResponse
        ? successResponse(
            dbResponse.dataValues,
            HTTP_STATUS.OK,
            " data fetched"
          )
        : successResponse([], HTTP_STATUS.NOT_FOUND, "Company is not exist");
    } catch (error) {
      return errorResponse(HTTP_STATUS.INTERNAL_SERVER_ERROR, error.message);
    }
  }
  async deleteCompanyByIdService(id) {
    try {
      const dbResponse = await CompanyRepoObj.deleteCompanyById(id);
      return dbResponse
        ? successResponse([], HTTP_STATUS.OK, "data deleted successfully")
        : successResponse([], HTTP_STATUS.NOT_FOUND, "Company is not exist");
    } catch (error) {
      return errorResponse(HTTP_STATUS.INTERNAL_SERVER_ERROR, error.message);
    }
  }
  async createCompanyService(CompanyData,logoName) {
    const hashedPassword = await HashPasswordUsingBcryptjs(
      CompanyData.password
    );
    const newCompany = {
      name: CompanyData.name,
      location: CompanyData.location,
      logo: logoName,
      description: CompanyData.description,
      no_of_department: CompanyData.no_of_department,
      registeredNo: CompanyData.registeredNo,
      address: CompanyData.website,
      phoneNo: CompanyData.phoneNo,
      email: CompanyData.email,
      password: hashedPassword,
      website: CompanyData.website,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    try {
      const isExist = await CompanyRepoObj.getCompanyByEmail(CompanyData.email);
      if (isExist) {
        return errorResponse(
          HTTP_STATUS.CONFLICT,
          "company is already registered"
        );
      } else {
        try {
          const dbResponse = await CompanyRepoObj.createCompany(newCompany);
          return successResponse(
            dbResponse.dataValues,
            HTTP_STATUS.CREATED,
            "new company has added successfully"
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
  async updateCompanyPasswordService(data, id) {
    const { new_password, old_password } = data;
    const { dataValues } = await CompanyRepoObj.getCompanyById(id);
    const isMatchPassword = await bcrypt.compare(
      old_password,
      dataValues.password
    );
    if (isMatchPassword) {
      const password = await HashPasswordUsingBcryptjs(new_password);
      const result = await CompanyRepoObj.updateCompanyPassword(
        { password: password },
        id
      );
      return successResponse(result, HTTP_STATUS.OK, "password updated");
    } else {
      return errorResponse(HTTP_STATUS.NOT_FOUND, "wrong password");
    }
  }
};
