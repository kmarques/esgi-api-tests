const { ValidationError } = require("sequelize");

module.exports = function ProductController(Product) {
  return {
    cget: async (req, res) => {
      const products = await Product.findAll({
        where: req.query,
      });
      res.json(products);
    },

    get: async (req, res) => {
      const product = await Product.findByPk(req.params.id);
      if (product) res.json(product);
      else res.sendStatus(404);
    },

    create: async (req, res) => {
      try {
        const product = await Product.create(req.body);
        res.status(201).json(product);
      } catch (err) {
        if (err instanceof ValidationError) {
          res.status(400).json(err.errors);
        } else {
          res.sendStatus(500);
          console.error(err);
        }
      }
    },

    update: async (req, res) => {
      try {
        const [nb, [data]] = await Product.update(req.body, {
          where: {
            id: req.params.id,
          },
          returning: true,
        });
        if (nb === 1) res.json(data);
        else res.sendStatus(404);
      } catch (err) {
        if (err instanceof ValidationError) {
          res.status(400).json(err.errors);
        } else {
          res.sendStatus(500);
          console.error(err);
        }
      }
    },

    delete: async (req, res) => {
      try {
        const [nb] = await Product.destroy({
          where: {
            id: req.params.id,
          },
        });
        if (nb) res.sendStatus(204);
        else res.sendStatus(404);
      } catch (err) {
        res.sendStatus(500);
        console.error(err);
      }
    },
  };
};
