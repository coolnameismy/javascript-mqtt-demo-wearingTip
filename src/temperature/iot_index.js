/**
说明：本文件作为iot套件的使用示例， 使用时请更改 productKey，productSecret ，deviceName，deviceSecret为你自己的值
产品地址：https://www.aliyun.com/product/iot
内测申请请联系：xuanyan.lyw@alibaba-inc.com

**/

'use strict'

const mqtt = require('mqtt');
const crypto = require('crypto');
 
//温度传感器
let productKey = "<productKey>";
let productSecret = "<productSecret>"
let deviceType = "1";
let sdkVersion = "1.0.0";
//device info
let deviceName = "<deviceName>";
let deviceSecret = "<deviceSecret>";
//topic ，在平台注册
let topic = '/<productKey>/<deviceName>/temperature';
 

//生成client_id
var make_client_id = (productKey,deviceName,deviceType,sdkVersion)=> {
	return `${productKey}:${deviceName}:${deviceType}:${sdkVersion}`;
}

//生成UserName
var make_username = (productKey,productSecret,deviceName,deviceSecret) => {
	 var key = `${productKey}${productSecret}${deviceName}${deviceSecret}`;
	 const hash = crypto.createHash('md5');
	 hash.update(key);
	 // console.log(hash.digest('hex'));  
	 return hash.digest('hex').toLocaleUpperCase();
}

// make_username(productKey,productSecret,deviceName,deviceSecret);

 
var settings = {
  keepalive: 100,
  protocolId: 'MQIsdp',
  protocolVersion: 3,
  clientId: make_client_id(productKey,deviceName,deviceType,sdkVersion),
  clean: false,
  username:make_username(productKey,productSecret,deviceName,deviceSecret),
  port: 8000,
  host:"iot-as.aliyuncs.com"
}

var client  = mqtt.connect(settings);

client.on('connect', function () {
   console.log('>>> connected')
   setInterval(
   		()=>{
   			client.publish(topic,"30");
   		},
   		3000
   	);
   
})

client.on('message', function (topic, message) {
  // message is Buffer
  console.log(message.toString())

})
