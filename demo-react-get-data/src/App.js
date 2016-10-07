import React from 'react';

export default class App extends React.Component {
  _handleSubmit(e){
    e.preventDefault();
    var data = {};
    data.title = this.refs.title.value;
    data.content = this.refs.content.value;
    console.log(data);
    //console.log(data);
    // { title: "hello", content: "xxxx" }
  }
  render(){
    return(
      <div>
        <form onSubmit={this._handleSubmit.bind(this)}>
          <input type="text" ref="title"/>
          {/* https://facebook.github.io/react/docs/more-about-refs-zh-CN.html */}
          <input type="text" ref="content"/>
          <input type="submit" />
        </form>
      </div>
    );
  }
}
