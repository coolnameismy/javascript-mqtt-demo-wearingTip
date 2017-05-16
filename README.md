## demo说明

demo是一个使用JavaScript和MQTT实现的一个简单的物联网应用，通过client端上报温度数据，server处理温度数据（业务处理），app端展示结果（根据温度的一些穿衣提示）

![](/asset/struct1.png)

## demo结构说明

client端：

-  `src/temperature/index.js` 基于 mqtt.js实现，可以移植到主流开发板对接传感器实现真实功能
-  `src/temperature/iot_index.js` 基于阿里云iothub产品，对index.js进行转译，具体可以阅读文件注释

broker端：

-  `src/broker/index.js` 基于 mosac实现的一个mqtt的broker服务

server：

-  `src/server/index.js` 基于 mqtt.js订阅数据，处理业务

app：

- 使用koa和mqtt.js，通过web展示数据提示

![](/asset/struct2.png)

## 快速启动

- 1：进入每个目录，执行 `npm install ` 安装依赖包
- 2：先启动broker， 进入borker目录，执行 `node index`
- 3：启动client, 进入temperature目录，执行 `node index`
- 4：启动app, 进入app目录，执行 `node index` ，在浏览器中输入 `localhost：3000` 查看结果

## iot前端工作机会

pc时代是物与物的交流，互联网时代是人与人的交流，物联网时代是人与物的相互联系，物与物的相互联系，万物互联的时代就要到来，iot的时代就要到来，欢迎登船

阿里云iot事业部招前端，有意向者可以发送简历到

xuanyan.lyw@alibaba-inc.com 或 coolnameismy@gmail.com

![](/asset/iot.png)


