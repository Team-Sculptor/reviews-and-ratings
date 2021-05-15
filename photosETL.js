const csv = require('csv-parser')
const fs = require('fs')
// const results = [];
const Review = require('./database/ReviewsSchema.js')
const ReviewPhotos = require('./database/ReviewPhotosSchema.js')

var photosCounter = 0





fs.createReadStream('./public/reviews_photos.csv')
  .pipe(csv())
  .on('data', (data) => {
    // do stuff with the data

Review.insert

    ReviewPhotos.create({
      id: data.id,
      review_id: Number(data.review_id),
      url: data.url
    }, (err) => {
      if (err) {
        console.log('error saving photos to database!: ', err)
        return err;
      } else {
        photosCounter++
        if (photosCounter % 100000 === 0) {
          console.log('saved another 100,000 photo schemas!')
        }
      }
    })
  })

  .on('end', () => {
    console.log('done with photos')
    // you can log anything helpful here
  })