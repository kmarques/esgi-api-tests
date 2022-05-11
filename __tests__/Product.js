const supertest = require("supertest");
const app = require("../app.js");
const FixtureLoader = require("../features/utils/FixtureLoader.js");
const { sequelize } = require("../models");
const request = supertest(app);
const fs = require("fs/promises");

beforeAll(async () => {
  sequelize.constructor._cls = new Map();
});

beforeEach(async () => {
  const trx = await sequelize.transaction();
  sequelize.constructor._cls.set("transaction", trx);
});
afterEach(async () => {
  await sequelize.constructor._cls.get("transaction").rollback();
});

afterAll(() => {
  sequelize.close();
});

describe("Product routes", () => {
  it("should return all products with empty array", async () => {
    const response = await request.get("/products").send();
    expect(response.status).toBe(200);
    expect(response.body).toHaveLength(0);
  });
  it("should create a product", async () => {
    const response = await request
      .post("/products")
      .set("Content-Type", "application/json")
      .send({
        name: "Product 1",
      });
    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty("id");
    expect(response.body).toHaveProperty("name", "Product 1");
  });
  it("should return all products with data", async () => {
    await FixtureLoader(
      await fs.realpath(__dirname + "/../features/fixtures/product.json")
    );
    const response = await request.get("/products").send();
    expect(response.status).toBe(200);
    expect(response.body).toHaveLength(3);
  });
});
