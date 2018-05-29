import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>App</h1>
        <ul>
          <li><Link to="/news/888" activeclassname="active">News</Link></li>
          <li><Link to="/about" activeclassname="active">About</Link></li>
        </ul>

        {this.props.children}
      </div>
    );
  }
}

export default App;
