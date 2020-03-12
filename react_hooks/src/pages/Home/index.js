import React, { Component } from 'react';
import Hooks from "../../components/Hooks";
import UseStateComponent from "../../components/FetchData";

class Home extends Component {
  constructor() {
    super();

    this.state = {
      msg: 'hello',
      username: '暂无数据'
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
    const props1 = {
      intialState: this.state.msg,
      changeMsg: this.changeMsg
    }

    return (
      <div>
        <h1>{this.state.msg}</h1>
        <Hooks {...props1} />
        <hr/>
        <UseStateComponent username={this.state.username}/>
      </div>
    )
  }
}

export default Home;