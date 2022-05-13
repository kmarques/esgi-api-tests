const { Router } = require("express");
const { Product } = require("../models");
const router = new Router();

router.get("", async (req, res) => {
  const products = await Product.findAll({ where: req.query });
  res.send(products);
});

router.get("/:id", async (req, res) => {
  const products = await Product.findByPk(parseInt(req.params.id));
  res.send(products);
});

router.post("", async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).send(product);
  } catch (error) {
    if (error.name === "SequelizeValidationError") {
      res.status(400).send(error.message);
    } else {
      res.sendStatus(500);
    }
  }
});

module.exports = router;
