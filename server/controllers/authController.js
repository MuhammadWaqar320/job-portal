const authServiceObj = new (require("../services/authService"))();
const {constructResponse}=require("../utils/functions")
const userLoginFun = async (req,res) => {
  const responseData = await authServiceObj.authServiceFun(req.body);
  return constructResponse(res, responseData);
};
module.exports = {
  userLoginFun,
};
