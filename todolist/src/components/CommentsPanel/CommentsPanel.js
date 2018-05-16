import React, { Component } from 'react';

class CommentsPanel extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div>
        <div className="list-group">
          <div className="list-group-item">
            <h4 className="list-group-item-heading">List group item heading</h4>
            <p className="list-group-item-text">npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupport...</p>
            <button type="button" className="btn btn-default myBtn">删除</button>
          </div>
          <div className="list-group-item">
            <h4 className="list-group-item-heading">List group item heading</h4>
            <p className="list-group-item-text">npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupport...</p>
            <button type="button" className="btn btn-default myBtn">删除</button>
          </div>
        </div>
      </div>
    )
  }
}

export default CommentsPanel