import React, { Component } from 'react';
import Form from './Form';
import axios from 'axios';

class NewPosts extends Component {
  getStyles() {
    return {
      content: {
        width: '100%',
        maxWidth: '600px',
        margin: '30px auto',
        backgroundColor: '#fff',
        borderRadius: '10px',
        boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px'
      },
      title: {
        fontSize: '1.2em',
        textAlign: 'center',
        paddingTop: '20px'
      }
    };
  }

//所有的代码都在客户端中运行

  newPosts(data){
     //axios传统上我们认为它就是发ajax请求的，类似s.ajax()
     //axios 就是用来发http请求的
      axios.post('http://localhost:3000/posts', data)
      //POST /posts  according to REST api structrue
      //例如把一篇博客当做一个resources资源
      //GET /posts  列出所有博客
      //PUT /posts/:post_id   更新一篇博客
      //DELETE /posts/:post_id  删除一篇博客
      //GET /posts/:post_id  打开一篇博客

      // REST 架构有两大优势
      // 1.请求的格式符合正常用户思维
      // 2.最大程度的尊重了 http verb 设计者的原始意图
      .then( res => {
       console.log(res.data.message);
       this.context.router.push('/');//页面跳转 可以用重定向根据返回的路径跳转，也可以用link链接
      })
    }
  render() {
    let styles = this.getStyles();
    return (
      <div style={styles.content}>
        <div style={styles.title}>写文章</div>
        <Form newPosts={this.newPosts.bind(this)} />
      </div>
    );
  }
}
NewPosts.contextTypes = {
  router: React.PropTypes.object
 };
export default NewPosts;
