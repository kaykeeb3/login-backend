const userService = require("../../../services/userService");

const getUserInfo = (req, res) => {
  const user = req.user; // Obtém as informações do usuário a partir do middleware de autenticação
  res.json({ message: "Informações do usuário obtidas com sucesso", user });
};

module.exports = { getUserInfo };
