import React, { Component } from 'react';

class Detail extends Component {

  render() {
    return(
      <div>
        <p>我是新闻详情页</p>
        <span>{JSON.stringify(this.props.match)}</span>
        <span>{JSON.stringify(this.props.location.query)}</span>
      </div>
    )
  }
}

export default Detail