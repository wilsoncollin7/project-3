module.exports = function (db) {
  return {
    // Get all trails
    getTrails: function (req, res) {
      db.Trail.findAll({}).then(function (dbTrail) {
        res.json(dbTrail);
      });
    },
    getUsersTrails: function (req, res) {
      db.Trail.findAll({ where: { UserId: req.session.passport.user.id }, raw: true }).then(function (dbTrail) {
        res.json(dbTrail);
      });
    },
    // Create a new trail
    createTrail: function (req, res) {
      db.Trail.create(req.body).then(function (dbTrail) {
        res.json(dbTrail);
      });
    },
    // Delete an trail
    deleteTrail: function (req, res) {
      db.Trail.destroy({ where: { id: req.params.id } }).then(function (dbTrail) {
        res.json(dbTrail);
      });
    }
  }
};
