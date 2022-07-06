const express = require("express");

const app = express();
app.use(express.json());

app.use("/products", require("./routes/products.routes"));

module.exports = app;
