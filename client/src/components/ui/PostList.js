import React, { Component } from 'react';
import map from 'lodash/fp/map';
import axios from 'axios';
import {Link} from 'react-router';


export default class PostList extends Component {
  constructor() {
    super();
    this.state={
      posts: []
    };
  }
  getStyles() {
    return {
      content: {
        position: 'relative',
        maxWidth: '600px',
        margin: '20px auto',
        backgroundColor: '#eef3f2',
        borderRadius: '5px',
        padding: '30px',
        boxShadow: '#03a9f4 0px 1px 6px, #03a9f4 0px 1px 4px'
      },
      title: {
        fontSize: '1.2em'
      },
      link:{
        textDecoration:'none',
        fontSize:'20px',
        color:'#607d8b',
        padding:'0 20px'
      },
      links:{
        textDecoration:'none',
        fontSize:'20px',
        color:'#00bcd4',
        display:'block',
        float:'right',
        padding:'0 20px'
      },
      btn:{
        textDecoration:'none',
        color:'#00bcd4',
        display:'block',
        float:'left'
      },
      btn1:{
        textDecoration:'none',
        color:'#00bcd4',
        display:'block',
        float:'right'
      },
      a:{
       position:'absolute',
       right:'16px',
       top:'20px'
     }
    }
  }
  componentWillMount() {
    //  Promise
    axios.get('http://localhost:3000/posts').then(res => {
      console.log('axios');
      this.setState({
        posts: res.data.posts
      });
      console.log(this.state.posts);
    });
  }
  render() {
    const styles = this.getStyles();
    const postList = map((post) => {
      return (
        <div style={styles.content} key={post._id}>
          <div style={styles.title}>{post.title}</div>
                <Link to={`/posts/${post._id}`} style={styles.btn}>查看</Link>
                <Link to={`/posts/${post._id}/edit`} style={styles.btn1}>编辑</Link>
        </div>
      )
    }, this.state.posts);
    return(
      <div>
        <Link to = "/" style={styles.link}>返回首页</Link>
        <Link to = "/write" style={styles.links}>写文章</Link>
        { postList }
      </div>
    );
  }
}
