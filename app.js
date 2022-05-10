const express = require("express");

const app = express();
app.use(express.json());

app.use("/products", require("./routes/Product"));
app.use("/", require("./routes/Security"));

module.exports = app;
