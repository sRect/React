import React, { Component } from 'react';

import AddComment from "../AddComment/AddComment"
import CommentsPanel from "../CommentsPanel/CommentsPanel"

import './App.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      commentArr: [{
        username: "jack",
        commentContent: "当初不该学php"
      },{
        username: "rose2",
        commentContent: "当初不该学php!"
      }]
    }
  }

  handleAddComment = (obj) => { // 添加评论
    console.log(obj)
    let commentArr = this.state.commentArr;
    commentArr.unshift(obj);

    this.setState({
      commentArr
    })
  }

  deleteComment = (index) => { // 删除评论
    let commentArr = this.state.commentArr;
    commentArr.splice(index, 1)

    this.setState({
      commentArr
    })
  }

  render() {
    return (
      <div className="App container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <div className="header text-center">
              <h2>简易留言板</h2>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-5 col-md-5 col-sm-5">
            <AddComment handleAddComment={this.handleAddComment}/>
          </div>
          <div className="col-lg-7 col-md-7 col-sm-7">
            <CommentsPanel commentArr={this.state.commentArr} deleteComment={this.deleteComment}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
