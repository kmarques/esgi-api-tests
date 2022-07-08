const request = require("supertest");
const { connection } = require("../../models");

afterAll(() => {
  connection.close();
});

beforeAll(async () => {
  connection.constructor._cls = new Map();
});
beforeEach(async () => {
  const trx = await connection.transaction();
  connection.constructor._cls.set("transaction", trx);
});
afterEach(async () => {
  await connection.constructor._cls.get("transaction").rollback();
});

describe("Products", () => {
  it("should return all products", async () => {
    const app = require("../../app");
    const client = request(app);
    const res = await client.get("/products");
    expect(res.status).toBe(200);
    expect(res.body.length).toBe(0);
  });

  it("should create a product", async () => {
    const app = require("../../app");
    const client = request(app);
    const body = {
      name: "Product 1",
    };
    const res = await client
      .post("/products")
      .set("Content-Type", "application/json")
      .send(body);
    expect(res.status).toBe(201);
    expect(res.body.id).toBeDefined();
    expect(res.body.name).toBe("Product 1");
    expect(res.body.updatedAt).toBeDefined();
    expect(res.body.createdAt).toBeDefined();
  });

  it("should not create a product with wrong parameters", async () => {
    const app = require("../../app");
    const client = request(app);
    const body = {};
    const res = await client
      .post("/products")
      .set("Content-Type", "application/json")
      .send(body);
    expect(res.status).toBe(400);
    console.log(res.body);
    expect(res.body.length).toBe(1);
    expect(res.body[0].path).toBe("name");
    expect(res.body[0].message).toBe("Product.name cannot be null");
  });

  //it("should not create a product and crash with 500", async () => {
  //  const body = {};
  //  jest.resetModules();
  //  jest.mock("../../models", () => {
  //    return {
  //      Product: {
  //        create: () => {
  //          throw new Error("Error");
  //        },
  //      },
  //    };
  //  });
  //  const app = require("../../app");
  //  const client = request(app);
  //  const res = await client
  //    .post("/products")
  //    .set("Content-Type", "application/json")
  //    .send(body);
  //  expect(res.status).toBe(500);
  //  jest.unmock("../../models");
  //  jest.resetModules();
  //});
});
