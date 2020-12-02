const router = require("express").Router();
const trailController = require("../../controllers/trailController");

router.route("/")
  .post(trailController.create);

router.route("/:id")
  .get(trailController.findAll)
  .put(trailController.updateOne)
  .delete(trailController.remove);

module.exports = router;
