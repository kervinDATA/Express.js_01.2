const request = require("supertest");
const app = require("../src/app");
const { connect, closeDatabase } = require("../database");

beforeAll(() => {
  connect(); // Connexion avant les tests
});

afterAll((done) => {
  closeDatabase(done); // Fermer la connexion après les tests
});

describe("GET /api/movies", () => {
  it("should return all movies", async () => {
    const response = await request(app).get("/api/movies");

    expect(response.headers["content-type"]).toMatch(/json/);
    expect(response.status).toBe(200);
  });
});

describe("GET /api/movies/:id", () => {
  it("should return one movie", async () => {
    const response = await request(app).get("/api/movies/1");

    expect(response.headers["content-type"]).toMatch(/json/);
    expect(response.status).toBe(200);
  });

  it("should return no movie", async () => {
    const response = await request(app).get("/api/movies/9999");
    expect(response.status).toBe(404);
  });
});
