const axios = require('axios');

axios.get('/test')
.then((response) => {
  console.log('communcated with server. response: ', response)
})
.catch((error) => {
console.log('error in axios.get: ', error)
})