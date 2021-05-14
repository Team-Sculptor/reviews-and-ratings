const mongoose = require('mongoose');
const db = require('./index.js');
mongoose.Promise = global.Promise;

const ReviewPhotosSchema = mongoose.Schema({
  id: Number,
  review_id: Number,
  url: String
})

const ReviewPhotos = mongoose.model('ReviewPhotos', ReviewPhotosSchema);

module.exports = ReviewPhotos;

