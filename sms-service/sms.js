const accountSid = 'AC67e30edd421d3cfde59ed80a68ca956e'; 
const authToken = '6640d4dacb6d1f1579fc31e24e627911'; 
const client = require('twilio')(accountSid, authToken); 

module.exports = function sendSMS() {
    client.messages 
    .create({   
       body: "Пора добавить баблишка!",
       messagingServiceSid: 'MG4d31e68fb67ae48004640c22c1bb09a7',      
       to: '+13213474518' 
     }) 
    .then(message => console.log("Message: " + message.body + " is sent!")) 
    .done();
};