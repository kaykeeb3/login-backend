const jwtUtils = require("../utils/jwtUtils");
const prisma = require("../db");

const authenticateToken = async (req, res, next) => {
  const token = req.header("Authorization")?.replace("Bearer ", "");

  if (!token) {
    return res
      .status(401)
      .json({ error: "Acesso negado - Token não fornecido" });
  }

  try {
    const decodedToken = jwtUtils.verifyToken(token);
    const user = await prisma.user.findUnique({
      where: { id: decodedToken.userId },
    });

    if (!user) {
      return res
        .status(401)
        .json({ error: "Acesso negado - Usuário não encontrado" });
    }

    req.user = user;
    next();
  } catch (error) {
    console.error(error);
    return res.status(403).json({ error: "Acesso negado - Token inválido" });
  }
};

module.exports = authenticateToken;
