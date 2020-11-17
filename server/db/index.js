// Mongo Database

const mongoose = require('mongooge');
mongoose.Promise = global.Promise;

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

// need to add err message to notify when connection isn't working

module.exports = db;
