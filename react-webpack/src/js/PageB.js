import React, { Component } from "react"
import { Prompt } from 'react-router-dom';

class PageB extends Component {
  constructor(props) {
    super(props)

    this.state = {
      flag: false
    }

    this.handleClick = this.handleClick.bind(this)
  }

  componentWillMount() {
    console.log(this.props)
  }

  handleClick() {
    this.setState({
      flag: true
    })
  }

  render() {
    return (
      <div>
        <h2>PageB</h2>
        <p>页面参数：{ JSON.stringify(this.props.match.params) }</p>
        <button onClick={this.handleClick}>click</button>
        <Prompt message="真的要离开吗" when={this.state.flag}></Prompt>
      </div>
    )
  }
}

export default PageB