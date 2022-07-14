const axios = require('axios');

// Make a request for a user with a given ID
axios.post('https://smmlaba.com/vkapi/v1/?username=pb-online@yandex.ru&apikey=0223cd0d230c17145b955dad45c23d616b5080a8&action=services')
  .then(function (response) {
    response.data.message.forEach(val => {

      console.log([...new Set(val.category)]);
    })
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })