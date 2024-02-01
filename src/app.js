const express = require("express");
const bodyParser = require("body-parser");
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");

const app = express();
const PORT = process.env.PORT || 3333;

app.use(bodyParser.json());

// Rotas de autenticação
app.use("/auth", authRoutes);

// Rotas protegidas para usuários autenticados
app.use("/user", userRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
