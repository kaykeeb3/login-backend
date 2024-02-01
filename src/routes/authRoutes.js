const express = require("express");
const authController = require("../controllers/authController");
const {
  validateRegister,
  validateLogin,
} = require("../middlewares/validationMiddleware");

const router = express.Router();

// Rota de registro
router.post("/register", validateRegister, authController.register);

// Rota de login
router.post("/login", validateLogin, authController.login);

module.exports = router;
