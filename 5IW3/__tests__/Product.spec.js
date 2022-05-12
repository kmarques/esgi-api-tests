const supertest = require("supertest");
const { sequelize } = require("../models/index.js");

const client = supertest(require("../app.js"));

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
});
