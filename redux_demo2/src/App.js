import React, { Component } from 'react'

class App extends Component {

  render() {
    const { Increase, Decrease } = this.props;
    return (
      <div className="App">
        <p>num:{this.props.num}</p>
        <div>
          <button onClick={Increase}>increase</button>
          <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
          <button onClick={Decrease}>decrease</button>
        </div>
      </div>
    );
  }
}

export default App;
