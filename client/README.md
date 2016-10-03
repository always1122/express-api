# 一.通过不同的 request 来实现

## Request

- VERD

  - get
  - post
  - put
  - delete

- PATH

  - /about
  - /posts

- GET /posts 读取所有文章

- POST /posts 新建一篇文章

- PUT /posts/:posts_id 更新特定一篇文章

- GET /posts/:posts_id 读取特定一篇文查

- DELET /posts/:posts_id 删除特定一篇文章

## express路由

- 跑在服务器上，响应客户端发出的request，决定哪部分后台代码要被执行
curl -H "Content-Type: application/json" -X POST -d

## 测试服务器响应结果

- 在命令行中输入：curl -H "Content-Type: application/json" -X POST -d '{"title":"myTitle","content":"myContent"}' http://localhost:3000/posts

## api
- api是由当前程序提供出来的，提供给另外一个程序的开发者来使用的
- 作为前端开发者，我们所说的是web api
 - web api就是一个请求，请求结果是json数据
### 参考代码：
https://coding.net/u/happypeter/p/react-express-api-demo/git




# 二.将数据保存到数据库的步骤
 1.确保有数据，req.body.title

 2.建立代码和数据库的链接 mongoose.connect('mongodb:xxx')

 3.创建schema  在models/post.js

 4.创建model   module.exports=mongoose.model('Post',PostSchema)

 5.导入Post model

 6.实例化Post model 得到post对象

 7.保存post到数据库


# 三.怎样同时发送多个请求
 重定向，redirect    res.redirect（）
# 四.前后台分离
 后台只负责json数据，不负责html/css，前后台沟通的数据格式是json，前台请求数据的方式是：发ajax
 - 第一步：搭建React-webpack环境
