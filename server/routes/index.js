const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

// if no API routes are hit, send to react app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;