const express = require('express');
const router = express.Router();
const {validateRegistration,validateLogin} = require('../middlewares/validateUser');
const {
    registerUser,
    loginUser
  } = require("../controllers/userControllers");

router.post("/register", validateRegistration, registerUser);
router.post("/login", validateLogin, loginUser);

module.exports = router;