# 数据库（mongoDB软件，提供数据存储的方式）
## 1.启动操作界面
### 方式：
- 用户图形接口GUI

- 命令行接口CLI（对于mongodb 使用mongo shell命令来操作）

#### 启动mongodb
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

![](https://raw.githubusercontent.com/happypeter/digicity-express-api/master/doc/img/003-curl.png)

## 4.安装mongoose
### 作为一个npm包进行安装[link] (htps:www.npmjs.com/package/mongoose)
```
$ npm i --save mongoose
```
### 在js代码中导入mongoose
#### 新建一个文件 index.js
```
var mongoose = require('mongoose');
```
### 进行数据库的连接
```
mongoose.connect('mongodb://localhost:27017/express-api');
```
mongoose.connect 接口用来连接我们系统上安装的 mongodb 数据库。
如何定位数据库的所在位置：
- 一个逻辑上可行的方案，就是用数据存储的文件夹的位置(如前面采用的data/db文件夹)，但实际上有其他方法。
- mongodb软件，运行起来类似一个网站，用连接来访问(mongodb://localhost:27017)但是连接以后，要跟上具体的数据库全名。我们每次连接都是连接到一个数据库，比如我们这里就是express-api(一般与项目名同名)。

#### 判断是否连接成功：
```
var db = mongoose.connection;
db.on('error', console.log);
db.once('open', function() {
  console.log('success!')
});
```
### 定义数据的概要 Schema

- 数据天然的具有一定的结构，比如，人员名单中，自然的会涉及姓名，年龄，籍贯等信息。 在 mongodb 这里，一个人员的信息会被作为一条记录来保存。所有信息的类型会对应成字段名， 由于是跟计算机打交道，每个字段还要涉及它的数据类型（ num，string ...) 。
- 那么 Schema 就是用来规定一个记录的各个字段的，字段名+数据类型的。

```
var Schema = mongoose.Schema;
var PostSchema = new Schema(
  {
    title:String,
    content:String
  }
)
```
 上面的代码，规定出了我们的记录能够保存哪些数据。

### 创建数据模型 model

- 数据库的结构是，一个数据库，里面会包含多个集合，一个集合会包含多条数据记录。
那么现在，我们数据要往哪个数据库中存？这个问题以及通过前面的 mongoose.connect(xxx) 的语句指定了。
但是数据要保存到哪个集合还没有指定。

所有我们的 model 创建语句如下：

```
var Post = mongoose.model('Post', PostSchema);
```
上面 .model() 的第一个参数，Post 就为我们指定了集合的名字，会对应数据库中的 posts 这个集合。第二个参数是数据 schema ，就是前面我们定义的。

到这里，所有数据存储的基础设施全部就绪。

### 实例化model得到数据对象

现在我们要把实际要存储的数据，放到一个 model 的实例（对象）之中了。
```
var Post = require('./models/post');
var post = new Post({
  title: req.body.title,
  category:req.body.category,
  content:req.body.content});
```
### 对象之上呼叫 save()
这样可以把数据保存到数据库中:
```
post.save(function(){
  console.log('saved');
});
```
因为使用了异步操作方法 save()，导致在终端报告警告信息，解决办法是在连接 MongoDB 数据库 mongoose.connect(...); 之前，添加一行代码：
```
mongoose.Promise = global.Promise;
```
