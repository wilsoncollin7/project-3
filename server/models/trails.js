const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.promise = Promise;

const trailSchema = new Schema({ 
  name: {
    type: String,
    trim: true,
    required: 'Enter a name for the trail'
  },
  location: {
    type: String,
    required: 'Enter a location for the trail'
  }
});

const Trails = mongoose.model('Trails', trailSchema);

module.exports = Trails;
