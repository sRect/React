import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddComment extends Component {
  constructor(props) {
    super(props)

    this.state = {
      username: "",
      commentContent: ""
    }

    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleInputChange(event) {
    let currentName = event.target.name;
    
    currentName === "username" ? this.setState({username: event.target.value}) : this.setState({commentContent: event.target.value})
  }

  addComment = () => {
    this.props.handleAddComment(this.state)
  }
  
  render() {

    return(
      <div>
        <form>
          <div className="form-group">
            <label htmlFor="username">username</label>
            <input type="text" name="username" className="form-control" id="username" value={this.state.username} placeholder="请输入您的用户名" onChange={this.handleInputChange} />
          </div>
          <div className="form-group">
            <label htmlFor="comment">comment</label>
            <input type="text" name="comment" className="form-control" id="comment" value={this.state.commentContent} placeholder="请输入您的留言" onChange={this.handleInputChange} />
          </div>
          <button type="button" className="btn btn-primary btn-lg" onClick={this.addComment}>添加</button>
        </form>
      </div>
    )
  }
}

AddComment.propTypes = {
  handleAddComment: PropTypes.func.isRequired
}

export default AddComment