const request = require("supertest");
const app = require("../src/app");
const { connect, closeDatabase } = require("../database");

beforeAll(() => {
  connect(); // Connexion avant les tests
});

afterAll((done) => {
  closeDatabase(done); // Fermer la connexion après les tests
});

describe("GET /api/users", () => {
  it("should return all users", async () => {
    const response = await request(app).get("/api/users");

    expect(response.headers["content-type"]).toMatch(/json/);
    expect(response.status).toBe(200);
  });
});

describe("GET /api/users/:id", () => {
  it("should return one user", async () => {
    const response = await request(app).get("/api/users/1");

    expect(response.headers["content-type"]).toMatch(/json/);
    expect(response.status).toBe(200);
  });

  it("should return no user", async () => {
    const response = await request(app).get("/api/users/9999");
    expect(response.status).toBe(404);
  });
});
