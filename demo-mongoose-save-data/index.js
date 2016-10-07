var mongoose = require('mongoose');
var Post = require('./models/post');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/express-api/demo-mongoose-save-data')

var db = mongoose.connection;

db.on('error', console.log);
db.once('open', function() {
  var post = new Post(
    {
      title: 'mongoose'
    }
  );
  post.save()
  })
  console.log('success!');
})
