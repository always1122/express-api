var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const PostSchema = new Schema(
  {
    title:String
  }
);
module.exports = mongoose.model('Post', PostSchema);
