const JobApplicationServiceObj =
  new (require("../services/jobApplicationService"))();
const { constructResponse } = require("../utils/functions");
const createJobApplicationFun = async (req, res) => {
  const fileUrl = req.file
    ? `${process.env.SERVER_URL}/upload/${req.file.filename}`
    : null;
  const responseData =
    await JobApplicationServiceObj.createJobApplicationService(
      req.body,
      fileUrl,
    );
  return constructResponse(res, responseData);
};
const getAllJobApplicationFun = async (req, res) => {
  const responseData =
    await JobApplicationServiceObj.getAllJobApplicationService();
  return constructResponse(res, responseData);
};
module.exports = {
  createJobApplicationFun,
  getAllJobApplicationFun,
};
