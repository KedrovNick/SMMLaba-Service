const axios = require('axios');
const sendSMS = require('./sms-service/sms');
require('dotenv').config();

const checkBalance = async () => {
  axios.post(`https://smmlaba.com/vkapi/v1/?username=${process.env.EMAIL}&apikey=${process.env.API_KEY}&action=balance`)
  .then(function (response) {
    console.log(response.data.message.balance);
    if (response.data.message.balance == 0) {
      sendSMS();
    } else {
      console.log("We're good to go...")
    }
  })
  .catch(function (error) {
    console.log(error);
  })
};
// Not sure if we're gonna use this CALL
// const getServices = async () => {
//   axios.post(`https://smmlaba.com/vkapi/v1/?username=${process.env.EMAIL}&apikey=${process.env.API_KEY}&action=services`)
//   .then(function (response) {
//     const res = response.data.message;
//     res.forEach(el => {
//       console.log("Product Name: " + el.product_name);
//     });
//     res.forEach(el => {
//       console.log("Service Name: " + el.service);
//     });
//   })
//   .catch(function (error) {
//     // handle error
//     console.log(error);
//   })
// };

checkBalance();