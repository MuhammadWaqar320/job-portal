const { ApplicationForJob } = require("../models");
const { Job } = require("../models")
const { User } = require("../models");

module.exports = class ApplicationForJobRepo {
  getAllApplicationForJob() {
    return ApplicationForJob.findAll({
      include:[Job,User]
    });
  }
  getApplicationForJobById(jobSeekerId, jobId) {
    return ApplicationForJob.findOne({
      where: {
        jobSeekerId: jobSeekerId,
        jobId: jobId,
      },
    });
  }
  deleteApplicationForJobById(jobSeekerId, jobId) {
    return ApplicationForJob.destroy({
      where: {
        jobSeekerId: jobSeekerId,
        jobId: jobId,
      },
    });
  }
  createApplicationForJob(data) {
    return ApplicationForJob.create(data);
  }
};
