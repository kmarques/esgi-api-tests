const { DataTypes, Model } = require("sequelize");
const sequelize = require("../config/sequelize");

class Product extends Model {}

Product.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
  }
);

module.exports = Product;
