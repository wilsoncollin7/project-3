const router = require("express").Router();
const apiRoutes = require("./api");

// trails routes
router.use("/trails", apiRoutes);

module.exports = router;
