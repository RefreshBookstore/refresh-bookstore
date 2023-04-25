const express = require("express");
const router = express.Router();
const { validateUserRegistration } = require("../middlewares/userValidation");
const loginController = require("../controllers/loginController");
const checkSession = require("../middlewares/checkSession");
const {
  createUser,
  getUsers,
  updateUsers,
} = require("../controllers/userController");
const { isAdmin } = require("../middlewares/isAdmin.js");

router.post("/register", validateUserRegistration, createUser);

router.post("/login", loginController.login);

router.put("/", checkSession, isAdmin, updateUsers);

module.exports = router;
