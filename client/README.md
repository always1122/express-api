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
- api是由当前程序提供出说的是web api
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

# 五.以github为例查看报头（header）
 在命令行中输入 curl -i

https://api.github.com/users/always1122/orgs

## * POST /posts  according to REST api structrue
 例如把一篇博客当做一个resources资源
 - GET /posts  列出所有博客

 - PUT /posts/:post_id   更新一篇博客

 - DELETE /posts/:post_id  删除一篇博客

 - GET /posts/:post_id  打开一篇博客

## * REST 架构有两大优势
 -  1.请求的格式符合正常用户思维

 -  2.最大程度的尊重了 http verb 设计者的原始意图

## * axios
- axios传统上我们认为它就是发ajax请求的，类似s.ajax()
- axios 就是用来发http请求的
## 后台路由代码执行触发条件，就是前台request
