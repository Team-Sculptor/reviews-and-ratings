const mongoose = require('mongoose');
const mongoUri = 'mongodb://localhost/sdc';

mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  // useNewUnifiedTopology: true,
  useCreateIndex: true
});

// const ReviewSchema = mongoose.Schema({
//   id: Number,
//   product_id: Number,
//   rating: Number,
//   date: Date,
//   summary: String,
//   body: String,
//   recommend: String,
//   reported: String,
//   reviewer_name: String,
//   reviewer_email: String,
//   response: String,
//   helpfulness: Number
// })


// const Reviews = mongoose.model('Reviews', ReviewSchema);

// const getReviews = (id, callback) => {

//   Reviews.findOne({product_id: id}).then( (data) => {

//     console.log('data: ', data)
//     callback(null, data)

// })

// }

// module.exports = {getReviews};

const db = mongoose.connection;

module.exports = db;