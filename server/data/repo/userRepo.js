const { User } = require("../models");
module.exports = class UserRepo {
  getAllUser() {
    return User.findAll();
  }
  getUserById(id) {
    return User.findOne({
      where: {
        id: id,
      },
    });
  }
  getUserByEmail(email) {
    return User.findOne({ where: { email: email } });
  }
  deleteUserById(id) {
    return User.destroy({
      where: {
        id: id,
      },
    });
  }
  createUser(data) {
    return User.create(data);
  }
};
