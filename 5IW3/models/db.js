const Sequelize = require("sequelize");

const sequelize = new Sequelize("postgres://root:password@localhost:5433/db");

sequelize.authenticate().then(() => {
  console.log("Connection has been established successfully.");
});

module.exports = sequelize;
