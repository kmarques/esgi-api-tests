const { DataTypes, Model } = require("sequelize");
const connection = require("./db");
const Product = require("./Product")(DataTypes, Model, connection);

module.exports = {
  connection,
  Product,
};
