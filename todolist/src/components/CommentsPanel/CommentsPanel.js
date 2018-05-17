import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CommentsPanel extends Component {
  // constructor(props) {
  //   super(props)
  // }

  handleDelete = (index) => {
    this.props.deleteComment(index)
  } 

  render() {
    let commentArr = this.props.commentArr;
    let display = commentArr.length > 0 ? "none" : "block";

    return(
      <div>
        <h4 className="text-warning bg-warning text-center" style={{display: display, padding: '20px 0'}}>暂无留言信息</h4>
        <div className="list-group">
          {/* <div className="list-group-item">
            <h4 className="list-group-item-heading">List group item heading</h4>
            <p className="list-group-item-text">npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupport...</p>
            <button type="button" className="btn btn-default myBtn">删除</button>
          </div> */}
          {
            commentArr.map((item, index) => {
              return(
                <div className="list-group-item list-group-item-info" key={index}>
                  <h4 className="list-group-item-heading">{item.username}：</h4>
                  <p className="list-group-item-text">{item.commentContent}</p>
                  <button type="button" className="btn btn-warning myBtn" onClick={(e) => this.handleDelete(index)}>删除</button>
                </div>
              )
            })
          }

        </div>
      </div>
    )
  }
}

CommentsPanel.propTypes = {
  commentArr: PropTypes.array.isRequired,
  deleteComment: PropTypes.func.isRequired
}

export default CommentsPanel