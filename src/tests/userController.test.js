const request = require("supertest");
const app = require("../app");

describe("UserController", () => {
  describe("GET /user/info", () => {
    it("should return user information for authenticated user", async () => {
      const registerResponse = await request(app).post("/auth/register").send({
        username: "testuser",
        password: "testpassword",
      });

      const loginResponse = await request(app).post("/auth/login").send({
        username: "testuser",
        password: "testpassword",
      });

      const token = loginResponse.body.token;

      const userInfoResponse = await request(app)
        .get("/user/info")
        .set("Authorization", `Bearer ${token}`);

      expect(userInfoResponse.status).toBe(200);
      expect(userInfoResponse.body.user.username).toBe("testuser");
    });

    it("should return 401 for unauthenticated user", async () => {
      const response = await request(app).get("/user/info");
      expect(response.status).toBe(401);
    });
  });
});
