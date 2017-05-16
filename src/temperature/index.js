

var mqtt = require('mqtt');
var client  = mqtt.connect('mqtt://localhost:1883');


client.on('connect', function () {
   console.log('>>> connected')
   // client.subscribe('/tips')
   setInterval(
   		()=>{client.publish('/temperature', '30');},
   		3000
   	);
   
})

client.on('message', function (topic, message) {
  // message is Buffer
  console.log(message.toString())
})

// client.end();