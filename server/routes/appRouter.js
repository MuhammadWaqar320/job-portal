const express = require("express");
const router = express.Router();
const { userValidationFun } = require("../middlewares/userValidation");
const multer = require("multer");
const {
  createUserFun,
  getAllUserFun,
  getUserByIdFun,
  deleteUserByIdFun,
  changeAdminPassword
} = require("../controllers/userController");
const {
  createJobApplicationFun,
  getAllJobApplicationFun,
} = require("../controllers/jobApplicationController");
const {
  createJobFun,
  getAllJobFun,
  getJobByIdFun,
  deleteJobByIdFun,
  updateJobByIdFun,
  searchJobByIdFun,
} = require("../controllers/jobController");
const {
  createCompanyFun,
  getAllCompanyFun,
  getCompanyByIdFun,
  deleteCompanyByIdFun,
  changeCompanyPassword,
} = require("../controllers/companyController");
const { userLoginFun } = require("../controllers/authController");
const { validateRequestMiddleWare } = require("../middlewares/validateRequest");
const { body, check } = require("express-validator");
// files storage folders
const cvStorage = multer.diskStorage({
  destination: "./upload/cv",
  filename: (req, file, cb) => {
    return cb(null, `${file.fieldname}_${Date.now()}${file.originalname}`);
  },
});
const logoStorage = multer.diskStorage({
  destination: "./upload/logo",
  filename: (req, file, cb) => {
    return cb(null, `${file.fieldname}_${Date.now()}${file.originalname}`);
  },
});
const thumbnailStorage = multer.diskStorage({
  destination: "./upload/thumbnail",
  filename: (req, file, cb) => {
    return cb(null, `${file.fieldname}_${Date.now()}${file.originalname}`);
  },
});
const cvUpload = multer({ storage: cvStorage });
const logoUpload = multer({ storage: logoStorage });
const thumbnailUpload = multer({ storage: thumbnailStorage });
// user routes
router.post(
  "/user/create",
  // userValidationFun(),
  // validateRequestMiddleWare,
  createUserFun
);
router.get("/user/getAll", getAllUserFun);
router.get("/user/getById/:id", getUserByIdFun);
router.delete("/user/delete/:id", deleteUserByIdFun);
router.post("/user/login", userLoginFun);
router.put("/admin/change/password/:id", changeAdminPassword); // have to change

// job routes
router.post("/job/create", thumbnailUpload.single("picture"), createJobFun);
router.get("/job/getAll", getAllJobFun);
router.get("/job/getById/:id", getJobByIdFun);
router.delete("/job/delete/:id", deleteJobByIdFun);
router.put("/job/update/:id", updateJobByIdFun);
router.get("/job/search/:title", searchJobByIdFun);

// company routes
router.post("/company/create", logoUpload.single("logo"), createCompanyFun);
router.get("/company/getAll", getAllCompanyFun);
router.get("/company/getById/:id", getCompanyByIdFun);
router.delete("/company/delete/:id", deleteCompanyByIdFun);
router.put("/company/change/password/:id", changeCompanyPassword);  // have to change

// job application
router.post(
  "/application/create",
  cvUpload.single("cv"),
  createJobApplicationFun
);
router.get("/application/getAll", getAllJobApplicationFun);
module.exports = {
  router,
};
