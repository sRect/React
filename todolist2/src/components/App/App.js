import React, { Component } from 'react';

import Header from "../Header"
import Main from "../Main"
import Footer from "../Footer"

import './App.less';

class App extends Component {
  constructor() {
    super()

    this.state = {
      arr: []
    }
  }

  handleAddInfo = (obj) => {
    let arr = this.state.arr;
    arr.unshift(obj);
    console.log(obj)
    this.setState({
      arr
    })
  }

  render() {
    let mainProps = {
      arr: this.state.arr
    }

    return (
      <div className="App">
        <Header handleAddInfo={this.handleAddInfo}/>
        <Main {...mainProps} />
        <Footer />
      </div>
    );
  }
}

export default App;
