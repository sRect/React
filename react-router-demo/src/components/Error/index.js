import React, { Component } from 'react'

class ErrorPage extends Component {
  constructor() {
    super()

    this.state = {
      msg: '404 NOT FOUND'
    }
  }

  render() {
    return (
      <div>
        <h1>{this.state.msg}</h1>
      </div>
    )
  }
}

export default ErrorPage