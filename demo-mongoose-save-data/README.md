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
