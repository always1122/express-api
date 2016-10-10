var express = require('express');

var app = express();
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/demo-mongoose-save-data');

var db = mongoose.connection;
db.on('error', console.log);
db.once('open', function() {
  console.log(' success!')
});

var Schema = mongoose.Schema;

var PostSchema = new Schema(
  {
    title: String,
    content: String
  }
);

var Post = mongoose.model('Post', PostSchema);



app.post('/posts', function(req, res){
  console.log('run post.save()');
  var post = new Post({title:"Title", content: "myConent"})
  post.save(function(err){
    if(err) return console.log(err);
    console.log('saved');
  });
});

app.listen(3000, function(){
  console.log('running on port 3000.....');
});
