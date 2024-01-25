const express = require("express");
const router = express.Router();    

const {Signin,Signup} = require("../controllers/Auth");
const {DlUpload} = require('../controllers/dl')
const {userInfo} = require('../controllers/userinfo')
const {RCUpload} =  require("../controllers/rc");
const { Fine } = require("../controllers/Fine");
const { auth , isOfficer , isUser } = require("../middleware/auth");

router.post("/login", Signin);
router.post("/signup", Signup);
router.get("/userinfo/:id",userInfo)
router.post("/upload_dl",auth,DlUpload)
router.post("/upload_rc",auth,RCUpload)
router.get("/fine/:id",Fine)

module.exports = router; 