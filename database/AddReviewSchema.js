const mongoose = require('mongoose');

var AddReviewSchema = mongoose Schema({
  product_id: Number,
  rating: Number,
  summary: String,
  body: String,
  recommend: Boolean,
  name: String,
  email: String,
  photos: [String],
  characteristics: Object
})