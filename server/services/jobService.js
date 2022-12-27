const { errorResponse, successResponse } = require("../utils/functions");
const { HTTP_STATUS } = require("../utils/constant");
const JobRepoObj = new (require("../data/repo/jobRepo"))();
module.exports = class JobService {
  async getAllJobService() {
    try {
      const dbResponse = await JobRepoObj.getAllJob();
      return successResponse(dbResponse, HTTP_STATUS.OK, "all data fetched");
    } catch (error) {
      return errorResponse(HTTP_STATUS.INTERNAL_SERVER_ERROR, error.message);
    }
  }
  async getJobByIdService(id) {
    try {
      const dbResponse = await JobRepoObj.getJobById(id);
      return dbResponse
        ? successResponse(
            dbResponse.dataValues,
            HTTP_STATUS.OK,
            " data fetched"
          )
        : successResponse([], HTTP_STATUS.NOT_FOUND, "Job is not exist");
    } catch (error) {
      return errorResponse(HTTP_STATUS.INTERNAL_SERVER_ERROR, error.message);
    }
  }
  async searchJobByTitleService(title) {
    try {
      const dbResponse = await JobRepoObj.searchJobByTitle(title);
      return dbResponse
        ? successResponse(
            dbResponse.dataValues,
            HTTP_STATUS.OK,
            " data fetched"
          )
        : successResponse([], HTTP_STATUS.NOT_FOUND, "Job is not exist");
    } catch (error) {
      return errorResponse(HTTP_STATUS.INTERNAL_SERVER_ERROR, error.message);
    }
  }
  async deleteJobByIdService(id) {
    try {
      const dbResponse = await JobRepoObj.deleteJobById(id);
      return dbResponse
        ? successResponse([], HTTP_STATUS.OK, "data deleted successfully")
        : successResponse([], HTTP_STATUS.NOT_FOUND, "Job is not exist");
    } catch (error) {
      return errorResponse(HTTP_STATUS.INTERNAL_SERVER_ERROR, error.message);
    }
  }
  async createJobService(JobData, thumbnailName) {
    const newJob = {
      title: JobData.title,
      location: JobData.location,
      department: JobData.department,
      picture: thumbnailName,
      description: JobData.description,
      type: JobData.type,
      companyId: JobData.companyId,
      lastDate: JobData.lastDate,
      salary: JobData.salary,
      designation: JobData.designation,
      experience: JobData.experience,
      noOfVecancies: JobData.noOfVecancies,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    try {
      const dbResponse = await JobRepoObj.createJob(newJob);
      return successResponse(
        dbResponse.dataValues,
        HTTP_STATUS.CREATED,
        "new Job has added successfully"
      );
    } catch (error) {
      return errorResponse(HTTP_STATUS.INTERNAL_SERVER_ERROR, error.message);
    }
  }
  async updateJobService(data, id) {
    try {
      const [dbResponse] = await JobRepoObj.updateJob(data, id);
      return dbResponse
        ? successResponse([], HTTP_STATUS.OK, "data updated")
        : successResponse([], HTTP_STATUS.NOT_FOUND, "student is not exist");
    } catch (error) {
      return errorResponse(HTTP_STATUS.INTERNAL_SERVER_ERROR, error.message);
    }
  }
};
