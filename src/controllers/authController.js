const authService = require("../services/authService");

const register = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Validação de entrada
    if (!username || !password) {
      return res.status(400).json({ error: "Dados de registro inválidos" });
    }

    const user = await authService.register(username, password);
    res.status(201).json({ message: "Usuário registrado com sucesso", user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro no registro de usuário" });
  }
};

const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Validação de entrada
    if (!username || !password) {
      return res.status(400).json({ error: "Credenciais inválidas" });
    }

    const token = await authService.login(username, password);
    res.status(200).json({ message: "Login bem-sucedido", token });
  } catch (error) {
    console.error(error);
    res.status(401).json({ error: "Credenciais inválidas" });
  }
};

module.exports = { register, login };
