const request = require("supertest");
const app = require("../../app");

describe("AuthController", () => {
  describe("POST /auth/register", () => {
    it("should return 400 for invalid registration data", async () => {
      const response = await request(app).post("/auth/register").send({}); // Envie dados de registro inválidos
      expect(response.status).toBe(400);
    });
  });

  describe("POST /auth/login", () => {
    it("should return 400 for invalid login data", async () => {
      const response = await request(app).post("/auth/login").send({}); // Envie dados de login inválidos
      expect(response.status).toBe(400);
    });
  });
});
