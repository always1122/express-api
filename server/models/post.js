var mongoose=require('mongoose');
var Schema = mongoose.Schema;

var PostSchema = new Schema(
  {
    title:String,
    tag:String
  }
)



module.exports = mongoose.model('Post', PostSchema);
