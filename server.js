const express = require('express');
const bodyparser = require('body-parser');
const db = require('./database/index.js');
const ReviewPhotos = require('./database/ReviewPhotosSchema.js')
const Reviews = require('./database/ReviewsSchema.js')
const Characteristics = require('./database/CharacteristicsSchema.js')

const app = express();

app.use(bodyparser.json());
app.use(express.static(__dirname + '/public'));


app.get('/reviews/:productId', function (req, res) {
  console.log('req.params.id: ', req.params)
  Reviews.find({ product_id: { $eq: Number(req.params.productId) } })
    .then((data) => {
      res.send(data)
    })
    .catch((error) => { console.log('errror!', error) })


})


app.get('/reviews/meta/:productId', function (req, res) {

  Characteristics.find({ product_id: { $eq: Number(req.params.productId) } })
    .then((data) => {
      res.send(data)
    })
    .catch((error) => { console.log('error in characteristics.find: ', error) })

})

//AF post of the new written review
app.post('/reviews', function (req, res) {
  // Reviews.create({

  // })

})

// AF PUT of whether review was helpful
app.put('/reviews/:review_id/helpful', function (req, res) {

})

let port = 3000

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});