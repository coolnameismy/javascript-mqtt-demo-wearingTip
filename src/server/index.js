'use strict'

const mqtt = require('mqtt');
var client  = mqtt.connect('mqtt://localhost:1883');

client.on('connect', function () {
   console.log('>>> connected');
   client.subscribe('/temperature');
})

client.on('message', function (topic, message) {
  var temperature = parseInt(message.toString());
  var data = {temperature};

  if (temperature >= 60) {
  		data.tips = "热... 500服务器故障";
  }
  if (temperature >= 50) {
  		data.tips = "今天天气非常热，建议不要穿衣服了";
  }
  if (temperature >= 40) {
  		data.tips = "今天天气十分的热，建议穿短袖T恤+短裤";
  }
  if (temperature >= 30) {
  		data.tips = "今天天气有点的热，建议穿短袖T恤";
  }
  if (temperature < 0) {
  		data.tips = "今天天气十分寒冷，棉袄可以穿上一件";	
  }
  if (temperature < -10) {
  		data.tips = "今天天气十分十分寒冷，棉袄可以穿上二件";	
  }
  client.publish('/tips', JSON.stringify(data));
  // if (temperature+1) {}
  // message is Buffer
  console.log(JSON.stringify(data));
})