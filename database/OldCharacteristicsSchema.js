const mongoose = require('mongoose');
const db = require('./index.js');
mongoose.Promise = global.Promise;


const OldCharacteristicsSchema = mongoose.Schema({
  id: Number,
  product_id: Number,
  name: String
})

const OldCharacteristics = mongoose.model('OldCharacteristics', OldCharacteristicsSchema);

module.exports = OldCharacteristics;

