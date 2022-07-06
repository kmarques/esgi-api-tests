const { Router } = require("express");
const { ProductController } = require("../controllers");
const router = new Router();

router.get("/", ProductController.cget);
router.get("/:id", ProductController.get);
router.post("/", ProductController.create);
router.delete("/:id", ProductController.delete);
router.put("/:id", ProductController.update);

module.exports = router;
