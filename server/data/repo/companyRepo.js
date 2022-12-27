const { Company } = require("../models");
module.exports = class CompanyRepo {
  getAllCompany() {
    return Company.findAll();
  }
  getCompanyById(id) {
    return Company.findOne({
      where: {
        id: id,
      },
    });
  }
  getCompanyByEmail(email) {
    return Company.findOne({ where: { email: email } });
  }
  deleteCompanyById(id) {
    return Company.destroy({
      where: {
        id: id,
      },
    });
  }
  createCompany(data) {
    return Company.create(data);
  }
  updateCompanyPassword(data,id) {
     return Company.update(data, { where: { id: id } });
  };
};
