# 数据库（mongoDB软件，提供数据存储的方式）
## 1.启动操作界面
### 方式：
- 用户图形接口GUI

- 命令行接口CLI（对于mongodb 使用mongo shell命令来操作）

#### 启动服务器
  ```
  $ mongod --dbpath=./data/db
  ```
#### 启动 mongo shell
  ```
  $ mongo
  ```

## 2.基本命令行操作 mongo shell

### 创建文件夹（在创建的文件夹下同时创建子文件夹-p）
```
 $ mkdir -p data/db
```
### 创建一个数据库
```
$ use express-api
```
### 创建一个集合
```
$ db.createCollection('xxx')
```
### 集合中插入数据记录
```
$ db.xxx.insert({aa:'sss'})
```
### 查看集合中所有记录
```
$ db.xxx.find()
```

#### 世界上第一位程序员 Ada
![](https://github.com/happypeter/digicity-express-api/blob/master/doc/img/001-ada.png?raw=true)

### 删除集合中的一条记录
```
$ db.xxx.remove({aa:'sss'})
```
### 删除集合中所有的记录
```
$ db.xxx.remove({})
```
### 删除数据库 express-api
```
$ use express-api
$ db.dropDatabase()
```

## 3.用js代码操作mongodb
#### 我们主要基于一个 JS 库的帮助，Mongoose ，它可以作為一個 npm 的包來安裝。
解釋一下，一個 JS 庫 就是一組 JS 接口 的集合。
![](https://raw.githubusercontent.com/happypeter/digicity-express-api/master/doc/img/002-mongoose.png)

下面我们来动手做一个 express+mongoose 的小 demo.
### 先写一个最简单的 express 程序
index.js 如下：
```
var express = require('express');
var app = express();

app.post('/posts', function(req, res){
  console.log('hello');
});

app.listen(3000, function(){
  console.log('running on port 3000.....');
});
```
相应的 curl 测试命令是

curl --request POST localhost:3000/posts

如果可以在运行 node index.js 的位置看到 hello 表示我们这一步胜利完成。
## 4.安装mongoose
### 作为一个npm包进行安装[link](htps:www.npmjs.com/package/mongoose)
```
$ npm i --save mongoose
```
### 在js代码中导入mongoose
```
var mongoose = require('mongoose');
```
### 进行数据库的连接
```
mongoose.connect('mongodb://localhost:27017/express-api');
```
判断是否连接成功：
```
var db = mongoose.connection;
db.on('error', console.log);
db.once('open', function() {
  console.log('success!')
});
```
### 定义数据的概要 Schema
```
var Schema = mongoose.Schema;
var PostSchema = new Schema(
  {
    title:String,
    category:String,
    content:String
  }
)
```
### 创建数据模型 model
#### 新建一个文件 models/post.js
```
module.exports = mongoose.model('Post', PostSchema);
```
### 实例化model得到数据对象
```
var Post = require('./models/post');
var post = new Post({
  title: req.body.title,
  category:req.body.category,
  content:req.body.content});
```
### 对象之上呼叫 save()
```
post.save()
```
因为使用了异步操作方法 save()，导致在终端报告警告信息，解决办法是在连接 MongoDB 数据库 mongoose.connect(...); 之前，添加一行代码：
```
mongoose.Promise = global.Promise;
```
