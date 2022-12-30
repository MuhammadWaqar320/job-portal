const CompanyServiceObj = new (require("../services/companyService"))();
const { constructResponse } = require("../utils/functions");
const createCompanyFun = async (req, res) => {
  const fileUrl = req.file
    ? `${process.env.SERVER_URL}/upload/${req.file.filename}`
    : null;
  const responseData = await CompanyServiceObj.createCompanyService(
    req.body,
    fileUrl
  );
  return constructResponse(res, responseData);
};
const getAllCompanyFun = async (req, res) => {
  const responseData = await CompanyServiceObj.getAllCompanyService();
  return constructResponse(res, responseData);
};
const getCompanyByIdFun = async (req, res) => {
  const responseData = await CompanyServiceObj.getCompanyByIdService(
    req.params.id
  );
  return constructResponse(res, responseData);
};
const deleteCompanyByIdFun = async (req, res) => {
  const responseData = await CompanyServiceObj.deleteCompanyByIdService(
    req.params.id
  );
  return constructResponse(res, responseData);
};
const changeCompanyPassword = async (req, res) => {
  const responseData = await CompanyServiceObj.updateCompanyPasswordService(
    req.body,
    req.params.id
  );
  return constructResponse(res, responseData);
};

module.exports = {
  changeCompanyPassword,
  createCompanyFun,
  getAllCompanyFun,
  getCompanyByIdFun,
  deleteCompanyByIdFun,
};
