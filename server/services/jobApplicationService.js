const { errorResponse, successResponse } = require("../utils/functions");
const { HTTP_STATUS } = require("../utils/constant");
const JobApplicationRepoObj =
  new (require("../data/repo/jobApplicationRepo"))();
const { HashPasswordUsingBcryptjs } = require("../utils/functions");
const {transporter } = require("../utils/constant");

module.exports = class JobApplicationService {
  async getAllJobApplicationService() {
    try {
      const dbResponse = await JobApplicationRepoObj.getAllApplicationForJob();
      return successResponse(dbResponse, HTTP_STATUS.OK, "all data fetched");
    } catch (error) {
      return errorResponse(HTTP_STATUS.INTERNAL_SERVER_ERROR, error.message);
    }
  }
  async createJobApplicationService(JobApplicationData, cvName,email) {
    const newJobApplication = {
      address: JobApplicationData.address,
      education: JobApplicationData.education,
      cv: cvName,
      jobSeekerId: JobApplicationData.jobSeekerId,
      experience: JobApplicationData.experience,
      expectedSalary: JobApplicationData.expectedSalary,
      jobId: JobApplicationData.jobId,
      specialization: JobApplicationData.specialization,
      comment: JobApplicationData.comment,
      dob: JobApplicationData.dob,
      gender: JobApplicationData.gender,
      postcode: JobApplicationData.postcode,
      cnic: JobApplicationData.cnic,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    try {
      const dbResponse = await JobApplicationRepoObj.createApplicationForJob(
        newJobApplication
      );
      let mailOptions = {
        from: process.env.EMAIL,
        to: email,
        subject: "Job Application",
        text: `Dear manager, A new candidate applied for job`,
      };
      transporter.sendMail(mailOptions, (error) => {
        if (error) {
          console.log(error);
          return errorResponse(
            HTTP_STATUS.BAD_REQUEST,
            `Email could not sent due to this reason : ${error}`,
            []
          );
        }
      });
      return successResponse(
        dbResponse.dataValues,
        HTTP_STATUS.CREATED,
        "New JobApplication has added successfully"
      );
    } catch (error) {
      return errorResponse(HTTP_STATUS.INTERNAL_SERVER_ERROR, error.message);
    }
  }
};
