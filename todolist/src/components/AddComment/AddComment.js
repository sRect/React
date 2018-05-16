import React, { Component } from 'react';

class AddComment extends Component {

  render() {
    return(
      <div>
        <form>
          <div className="form-group">
            <label htmlFor="username">username</label>
            <input type="text" className="form-control" id="username" placeholder="请输入您的用户名" />
          </div>
          <div className="form-group">
            <label htmlFor="comment">comment</label>
            <input type="text" className="form-control" id="comment" placeholder="请输入您的留言" />
          </div>
          <button type="button" className="btn btn-primary btn-lg">添加</button>
        </form>
      </div>
    )
  }
}

export default AddComment