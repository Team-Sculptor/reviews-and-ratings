const mongoose = require('mongoose');
const db = require('./index.js');
mongoose.Promise = global.Promise;


const ReviewsSchema = mongoose.Schema({
  body: String,
  date: Date,
  helpfulness: Number,
  photos: [Object],
  rating: {},
  recommend: String,
  response: String,
  review_id: Number,
  reviewer_name: String,
  summary: String,
  product_id: Number,
  reported: String,
  reviewer_email: String
})

const Reviews = mongoose.model('Reviews', ReviewsSchema);

module.exports = Reviews;

