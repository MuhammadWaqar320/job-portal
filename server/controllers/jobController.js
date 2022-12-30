const JobServiceObj = new (require("../services/jobService"))();
const { constructResponse } = require("../utils/functions");
const createJobFun = async (req, res) => {
  const fileUrl = req.file
    ? `${process.env.SERVER_URL}/upload/${req.file.filename}`
    : null;
  const responseData = await JobServiceObj.createJobService(req.body, fileUrl);
  return constructResponse(res, responseData);
};
const getAllJobFun = async (req, res) => {
  const responseData = await JobServiceObj.getAllJobService();
  return constructResponse(res, responseData);
};
const getJobByIdFun = async (req, res) => {
  const responseData = await JobServiceObj.getJobByIdService(req.params.id);
  return constructResponse(res, responseData);
};
const searchJobByIdFun = async (req, res) => {
  const responseData = await JobServiceObj.searchJobByTitleService(
    req.params.title
  );
  return constructResponse(res, responseData);
};
const deleteJobByIdFun = async (req, res) => {
  const responseData = await JobServiceObj.deleteJobByIdService(req.params.id);
  return constructResponse(res, responseData);
};
const updateJobByIdFun = async (req, res) => {
  const responseData = await JobServiceObj.updateJobService(
    req.body,
    req.params.id
  );
  return constructResponse(res, responseData);
};
module.exports = {
  createJobFun,
  getAllJobFun,
  getJobByIdFun,
  deleteJobByIdFun,
  updateJobByIdFun,
  searchJobByIdFun,
};
