var axios = require('axios');

var data = {
  title:'myTitle',
  content:'myContent'
}
axios.post('http://localhost:3000/posts',data)//前后台路径相同，用axios发送http请求路径
