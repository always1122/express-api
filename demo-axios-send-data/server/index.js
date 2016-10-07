var express = require('express');
var app = express();
var bodyParser =require('body-parser');
app.use(bodyParser.json())

app.post('/posts',function(req,res){
  console.log(req.body);//用req.body获取数据,但需要引入body-parser，并app.use(bodyParser.json())
})


//监听请求是否连接
app.listen(3000,function(){
  console.log('running on port 3000')
})
