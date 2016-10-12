var express = require('express');
var  app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))


// 关闭同源策略
var cors = require('cors');
app.use(cors());



mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/express-api');

var db = mongoose.connection;
db.on('error', console.log);
db.once('open', function(){
  console.log('success!')
});
var routes = require('./routes');-
routes(app);
app.listen(3000, function() {
  console.log('running on port 3000')
})
//express路由
//跑在服务器上 响应客户端发出的request
//决定哪部分后台代码被执行
