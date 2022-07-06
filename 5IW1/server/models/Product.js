module.exports = function Product(DataTypes, Model, sequelize) {
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
  return Product;
};
