const { Product } = require("../models");
exports.ProductController = require("./products.controller")(Product);
