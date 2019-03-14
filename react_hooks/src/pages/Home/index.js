import React, { Component } from 'react';
import Hooks from "../../components/Hooks"

class Home extends Component {
  constructor() {
    super();

    this.state = {
      msg: 'hello'
    }
  }

  changeMsg = (msg) => {
    this.setState(() => {
      return {
        msg
      }
    })
  }

  render() {
    const props = {
      intialState: this.state.msg,
      changeMsg: this.changeMsg
    }

    return (
      <div>
        <h1>{this.state.msg}</h1>
        <Hooks {...props} />
      </div>
    )
  }
}

export default Home;