const prisma = require("../db");

const getUserById = async (userId) => {
  return prisma.user.findUnique({ where: { id: userId } });
};

module.exports = { getUserById };
