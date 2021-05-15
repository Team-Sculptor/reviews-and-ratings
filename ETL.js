const csv = require('csv-parser')
const fs = require('fs')
// const results = [];
const db = require('./database/index.js');
const Reviews = require('./database/ReviewsSchema.js')
const ReviewPhotos = require('./database/ReviewPhotosSchema.js')

var reviewsCounter = 0
// var photosCounter = 0

fs.createReadStream('./public/reviews.csv')
  .pipe(csv())
  .on('data', (data) => {



    if (data.date === 'NaN') {
      var date = null
    } else if (Number(data.date)) {
      var date = Number(data.date)
    } else {
      var date = null
    }

    if (data.recommend === 'true') {
      var recBool = true
    } else {
      var recBool = false
    }

    if (data.reported === 'true') {
      var repBool = true
    } else {
      var repBool = false
    }

    if (data.response === 'null') {
      var dataResponse = null;
    } else {
      var dataResponse = data.response;
    }

    if (!Number(data.helpfulness) && Number(data.helpfulness) !== 0) {
      var helpfulness = null;
    } else {
      var helpfulness = data.helpfulness;
    }
    var body = data.body
    var rating = Number(data.rating)
    var reviewId = Number(data.id)
    var reviewerName = data.reviewer_name
    var summary = data.summary
    var productId = Number(data.product_id)
    var reviewerEmail = data.reviewer_email
    var photos;

    ReviewPhotos.find({ review_id: { $eq: reviewId } })
      .then((data) => {
        photos = data;
        Reviews.create({
          body: body,
          date: date,
          helpfulness: helpfulness,
          photos: photos,
          rating: rating,
          recommend: recBool,
          response: dataResponse,
          review_id: reviewId,
          reviewer_name: reviewerName,
          summary: summary,
          product_id: productId,
          reported: repBool,
          reviewer_email: reviewerEmail,
        }, (err) => {
          if (err) {
            console.log('error saving review to database!: ', err)
            return err;
          } else {
            reviewsCounter++
            console.log('saved!', reviewsCounter)
            if (reviewsCounter % 100000 === 0) {
              console.log('saved another 100,000 review schemas!')
            }
          }
        })
      })
      .catch((error) => { console.log('error adding photos!', error) })

  })
  .on('end', () => {
    console.log('done with reviews');
    // for every item in results
  });



// fs.createReadStream('./public/reviews_photos.csv')
//   .pipe(csv())
//   .on('data', (data) => {
//     // do stuff with the data
//     ReviewPhotos.create({
//       id: data.id,
//       review_id: Number(data.review_id),
//       url: data.url
//     }, (err) => {
//       if (err) {
//         console.log('error saving photos to database!: ', err)
//         return err;
//       } else {
//         photosCounter++
//         if (photosCounter % 100000 === 0) {
//           console.log('saved another 100,000 photo schemas!')
//         }
//       }
//     })
//   })

//   .on('end', () => {
//     console.log('done with photos')
//     // you can log anything helpful here
//   })