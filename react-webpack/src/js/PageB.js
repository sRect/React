import React, { Component } from "react"

class PageB extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    console.log(this.props)
  }

  render() {
    return (
      <div>
        <h2>PageB</h2>
        <p>页面参数：{ JSON.stringify(this.props.match.params) }</p>
      </div>
    )
  }
}

export default PageB