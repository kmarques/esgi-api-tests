const supertest = require("supertest");
const { sequelize } = require("../models/index.js");
const fs = require("fs/promises");
const FixtureLoader = require("../fixtures/FixtureLoader.js");
const ReferenceManager = require("../fixtures/ReferenceManager.js");

const client = supertest(require("../app.js"));

beforeEach(async () => {
  sequelize.constructor._cls = new Map();
  sequelize.constructor._cls.set("transaction", await sequelize.transaction());
});

afterEach(async () => {
  await sequelize.constructor._cls.get("transaction").rollback();
  sequelize.constructor._cls.delete("transaction");
});

afterAll(async () => {
  await sequelize.close();
});

describe("test Product Api", () => {
  it("should return all products", async () => {
    const response = await client.get("/products");
    expect(response.status).toBe(200);
    expect(response.body.length).toBe(0);
  });

  it("should create a new product", async () => {
    const response = await client
      .post("/products")
      .set("Content-Type", "application/json")
      .send({
        name: "Test Product",
      });
    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty("id");
    expect(response.body.name).toBe("Test Product");
  });
  it("should return all products with data", async () => {
    await FixtureLoader(
      await fs.realpath(__dirname + "/../fixtures/product.json")
    );
    const response = await client.get("/products");
    expect(response.status).toBe(200);
    expect(response.body.length).toBe(3);
  });
  it("should return a products with data", async () => {
    await FixtureLoader(
      await fs.realpath(__dirname + "/../fixtures/product.json")
    );
    const response = await client.get(
      "/products/" + ReferenceManager.getValue("knife1.id")
    );
    expect(response.status).toBe(200);
    expect(response.body.id).toBe(ReferenceManager.getValue("knife1.id"));
    expect(response.body.name).toBe(ReferenceManager.getValue("knife1.name"));
  });
  it("should return a products with data", async () => {
    await FixtureLoader(
      await fs.realpath(__dirname + "/../fixtures/product.json")
    );
    const response = await client.get(
      "/products/" + ReferenceManager.getValue("knife2.id")
    );
    expect(response.status).toBe(200);
    expect(response.body.id).toBe(ReferenceManager.getValue("knife2.id"));
    expect(response.body.name).toBe(ReferenceManager.getValue("knife1.name"));
  });
});
