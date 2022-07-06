const Sequelize = require("sequelize");

const sequelize = new Sequelize("postgres://root:password@localhost:5433/db");

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

module.exports = sequelize;
