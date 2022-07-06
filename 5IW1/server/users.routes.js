const { Router } = require("express");
const { UserController } = require("./controllers");
const router = new Router();

router.get("/users", UserController.cget);
router.get("/users/:id", UserController.get);
router.post("/users", UserController.create);
router.delete("/users/:id", UserController.delete);
router.put("/users/:id", UserController.update);

module.exports = router;
