const { User } = require("../models");
module.exports = class UserRepo{
    getAllUser() {
        
    }
    getAllUserByType() {
        
    }
    getUserById() {
        
    }
    getUserByEmail(email) {
        return User.findOne({where:{email:email}})
    }
    updateUser() {
        
    }
    deleteUserById() {
        
    }
    createUser(data) {
     return User.create(data)    
    }

}