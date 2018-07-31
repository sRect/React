import React, { Component } from 'react'
import PropTypes from 'prop-types';

class App extends Component {

  static propTypes = {
    num: PropTypes.number.isRequired,
    Increase: PropTypes.func.isRequired,
    Decrease: PropTypes.func.isRequired
  }

  render() {
    const { Increase, Decrease, num } = this.props;

    return (
      <div className="App">
        <p>num:{num}</p>
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
