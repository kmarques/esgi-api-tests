const { Given, When, Then, AfterAll } = require("@cucumber/cucumber");
const { expect } = require("expect");
const supertest = require("supertest");
const app = require("../../app");
const { sequelize } = require("../../models");
const client = supertest(app);

AfterAll(async () => {
  await sequelize.close();
});

Given("I have a payload", function (dataTable) {
  this.payload = dataTable.rowsHash();
});

When("I request {string} {string}", async function (method, path) {
  this.request = client[method.toLowerCase()](path);
  this.response = await this.request.send();
  // Write code here that turns the phrase above into concrete actions
});

When("I request {string} {string} with payload", async function (method, path) {
  this.request = client[method.toLowerCase()](path).set(
    "Content-Type",
    "application/json"
  );
  this.response = await this.request.send(this.payload);
});

Then("the response code should be {int}", function (int) {
  // Write code here that turns the phrase above into concrete actions
  expect(this.response.status).toBe(int);
});

Then("I should receive an empty array", function () {
  // Write code here that turns the phrase above into concrete actions
  expect(this.response.body.length).toBe(0);
});

Then("I should receive an array with {int} elements", function (int) {
  // Write code here that turns the phrase above into concrete actions
  expect(this.response.body.length).toBe(int);
});

Then("I should have a property {string}", function (string) {
  // Write code here that turns the phrase above into concrete actions
  expect(this.response.body).toHaveProperty(string);
});

Then(
  "I should receive a element with the following attributes",
  function (dataTable) {
    const expected = dataTable.rowsHash();
    const actual = this.response.body;
    expect(typeof actual).toBe("object");
    Object.keys(expected).forEach((key) => {
      expect(actual).toHaveProperty(key, expected[key]);
    });
  }
);
