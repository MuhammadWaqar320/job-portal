const { Job } = require("../models");
const { Company } = require("../models");

module.exports = class JobRepo {
  getAllJob() {
    return Job.findAll({
      include: [Company],
    });
  }
  getJobById(id) {
    return Job.findOne({
      where: {
        id: id,
      },
      include: [Company],
    });
  }
  searchJobByTitle(title) {
    return Job.findOne({
      where: {
        title: title,
      },
      include: [Company],
    });
  }
  deleteJobById(id) {
    return Job.destroy({
      where: {
        id: id,
      },
    });
  }
  createJob(data) {
    return Job.create(data);
  }
  updateJob(data, id) {
    return Job.update(data, { where: { id: id } });
  }
};
