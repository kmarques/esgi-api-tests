const { sequelize } = require("./models");

sequelize
  .sync({ alter: true })
  .then(() => {
    console.log("Database synced");
  })
  .catch((err) => {
    console.log("Error creating database");
    console.log(err);
  })
  .finally(() => {
    sequelize.close();
  });
