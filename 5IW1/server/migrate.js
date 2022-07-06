const { connection } = require("./models");

connection.sync({ force: true }).then(() => {
  console.log("Database synced");
  connection.close();
});
