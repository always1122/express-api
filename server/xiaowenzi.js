var mongoose = require('mongoose')
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/express-api')



var db = mongoose.connection

// db.on('error', console.error.bind(console, 'connection error:'))

db.once('open', function() {
  var userSchema = mongoose.Schema({
    name: String,
    age: String
  })

  var User = mongoose.model('user', userSchema);
  // user 是实际数据库中记录的名字l
  // var peter = new user({ name: 'pppeter', password: '111', age: '33' });
  // // 成功构建一条数据记录
  // peter.save()


  User.findById({_id: '57eccb910d60402828ab2f46'}, function(err, user) {
    user.remove(function(err){
      console.log('删除了！')
      User.find().exec(function(err, users) {
        // 异步执行
        console.log(users);
      });
    });
  });
})
