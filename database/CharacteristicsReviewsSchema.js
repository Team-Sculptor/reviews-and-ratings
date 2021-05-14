const mongoose = require('mongoose');
const db = require('./index.js');
mongoose.Promise = global.Promise;


const CharacteristicsReviewsSchema = mongoose.Schema({
  id: Number,
  characteristic_id: Number,
  review_id: Number,
  value: Number
})

const CharacteristicsReviews = mongoose.model('CharacteristicsReviews', CharacteristicsReviewsSchema);

module.exports = CharacteristicsReviews;

