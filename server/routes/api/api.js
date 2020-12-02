const router = require("express").Router();
const trailController = require("../../controllers/trailController");

router.route("/")
  .get(trailController.findAll)
  .post(trailController.create);

router.route("/:id")
  .put(trailController.updateOne)
  .delete(trailController.remove);

module.exports = router;
