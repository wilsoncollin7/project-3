const db = require('../models');
// const ObjectId = require('mongoose').Types.ObjectId;

module.exports = {
    // Get all trails
    findAll: function(req, res) {
      db.Trails
        .find({"user": req.params.id})
        .sort({ date: -1 })
        .then(dbModel => {
          res.json(dbModel)
        })
        .catch(err => res.status(422).json(err));
    },
    updateOne: function(req, res) {
      db.Trails
        .findOneAndUpdate({ _id: req.params.id }, req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    create: function(req, res) {
      db.Trails
        .create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    remove: function(req, res) {
      db.Trails
        .findById({ _id: req.params.id })
        .then(dbModel => dbModel.remove())
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }
};
