const mongoose = require('mongoose');
const db = require('./index.js');
mongoose.Promise = global.Promise;


const CharacteristicsSchema = mongoose.Schema({
  product_id: Number,
  characteristics: Object
})

const Characteristics = mongoose.model('Characteristics', CharacteristicsSchema);

module.exports = Characteristics;

