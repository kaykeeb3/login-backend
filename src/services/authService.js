const bcrypt = require("bcrypt");
const jwtUtils = require("../utils/jwtUtils");
const prisma = require("../db");

const register = async (username, password) => {
  try {
    const hashedPassword = await bcrypt.hash(password, 12);
    const user = await prisma.user.create({
      data: { username, password: hashedPassword },
    });
    return user;
  } catch (error) {
    console.log(error);
    throw new Error("Erro no registro de usuário");
  }
};

const login = async (username, password) => {
  try {
    const user = await prisma.user.findUnique({ where: { username } });

    if (!user || !(await bcrypt.compare(password, user.password))) {
      throw new Error("Credenciais inválidas");
    }

    const token = jwtUtils.generateToken(user.id, user.username);
    return token;
  } catch (error) {
    console.log(error);
    throw new Error("Erro no processo de login");
  }
};

module.exports = { register, login };
