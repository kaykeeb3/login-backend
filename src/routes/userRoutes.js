const express = require("express");
const userController = require("../controllers/userController");
const authenticationMiddleware = require("../middlewares/authenticationMiddleware");

const router = express.Router();

// Rota protegida para obter informações do usuário
router.get("/info", authenticationMiddleware, userController.getUserInfo);

module.exports = router;
