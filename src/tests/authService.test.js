const authService = require("../../src/services/authService");

describe("AuthService", () => {
  describe("Register", () => {
    it("should register a new user", async () => {
      const user = await authService.register("testuser", "testpassword");
      expect(user).toHaveProperty("id");
      expect(user.username).toBe("testuser");
    });

    it("should throw an error for duplicate username", async () => {
      await expect(
        authService.register("testuser", "testpassword")
      ).rejects.toThrow("Erro no registro de usuário");
    });
  });

  describe("Login", () => {
    it("should login with correct credentials", async () => {
      const token = await authService.login("testuser", "testpassword");
      expect(token).toBeTruthy();
    });

    it("should throw an error for incorrect credentials", async () => {
      await expect(
        authService.login("testuser", "wrongpassword")
      ).rejects.toThrow("Erro no processo de login");
    });
  });
});
