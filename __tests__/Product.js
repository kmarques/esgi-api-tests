const supertest = require("supertest");
const app = require("../app.js");
const { sequelize } = require("../models");
const request = supertest(app);

afterAll(() => {
  sequelize.close();
});

describe("Product routes", () => {
  it("should return all products", async () => {
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
});
