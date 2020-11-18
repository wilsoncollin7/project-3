// Mongo Database

const mongoose = require('mongooge');
mongoose.Promise = global.Promise;
const db = require('../models');

// need to setup Mongo .env stuff, follow collateral directions
mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/out-yonder',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
);

module.exports = db;
