var express = require('express');
var  app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/express-api');


var Post = require('./models/post');
var db = mongoose.connection;
db.on('error', console.log);
db.once('open', function() {
  console.log('success!')
});

app.get('/', function(req, res) {
  var page = "<form method='post' action='/posts'>" +
             "<input type='text' name='title' />" +
             "<input type='submit' />" +
             "</form>"
  res.send(page)
})
app.get('/posts', function(req, res) {
  Post.find().sort({'createdAt':-1}).exec(function(err,posts){
    res.send(posts)
  })
})//增删改查中增的操作
app.post('/posts/', function(req, res) {
  // res.send('the post title is: ' + req.body.title)
  var post = new Post({title: req.body.title});
  post.save(function(err){
    if(err) console.log(err);
    console.log('saved!');
  })
  res.redirect('/posts')
})
app.listen(3000, function() {
  console.log('running on port 3000')
})
//express路由
//跑在服务器上 响应客户端发出的request
//决定哪部分后台代码被执行
