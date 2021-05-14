
const csv = require('csv-parser')
const fs = require('fs')
// const results = [];
const db = require('./database/index.js');
const Reviews = require('./database/ReviewsSchema.js')
const ReviewPhotos = require('./database/ReviewPhotosSchema.js')
const Characteristics = require('./database/CharacteristicsSchema.js')
const OldCharacteristics = require('./database/OldCharacteristicsSchema.js')
const CharacteristicsReviews = require('./database/CharacteristicsReviewsSchema.js')

var counter = 0
// 1000011 products
var loadToMongo = (i) => {
  if (i === 1000011) {
    console.log('donezo');
    return;
  }
  var characteristicsObj = {}
  OldCharacteristics.find({ product_id: { $eq: i } })
    .then((data) => {



      var innerLoad = (j) => {
        if (j === data.length) {
          return loadToMongo(i + 1)
        }

        var name = data[j].name
        var productId = data[j].product_id
        var id = data[j].id
        CharacteristicsReviews.find({ characteristic_id: { $eq: id } })
          .then((response) => {

            var total = 0;


            response.forEach((obj) => {

              total += obj.value
            })


            var average = (response.length === 0) ? 0 : total/response.length
            characteristicsObj[name] = { id: id, value: average.toString() }
            Characteristics.create({
              product_id: i,
              characteristics: characteristicsObj
            })
              .then(() => {
                counter++
                console.log('saved! ', counter)
                if (counter === 1000011) {
                  console.log('finito')
                  return;
                }
                innerLoad(j + 1)

              })
              .catch((err) => { console.log('err in Characteristics.create: ', err) })


          })
          .catch((err) => { console.log('err in CharachteristicsReviews.find: ', err) })
        }
    innerLoad(0)


    })
    .catch((err) => {
      console.log('error in OldCharacteristics.find: ', err)
    })
  }
  loadToMongo(1);


