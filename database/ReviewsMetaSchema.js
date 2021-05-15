const mongoose = require('mongoose');

var ReviewsMetaSchema = mongoose Schema({
  product_id: Number,
  ratings: {
    0: Number,
    1: Number,
    2: Number,
    3: Number,
    4: Number,
    5: Number
  },
  recommended: {
    0: Number,
    1: Number,
    2: Number,
    3: Number,
    4: Number,
    5: Number
  },
  characteristics: {
    Size: {
      id: Number,
      value: String
    }
  }
})