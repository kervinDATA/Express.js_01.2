const { connect, closeDatabase } = require("../database");

beforeAll(() => {
  connect();
});

afterAll((done) => {
  closeDatabase(done);
});

test("Database should connect and close without errors", () => {
  expect(true).toBe(true); // Test basique pour vérifier les hooks
});
