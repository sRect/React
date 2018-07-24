import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import './App.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      time: Date.now()
    }
  }
  render() {
    return (
      <div className="App">
        <h1>App</h1>
        <ul>
          <li>
            <Link
              to={{
                pathname: "/news/888",
                search: "?title=hello react-router-dom",
                hash: "good page",
                state: { createTime: this.state.time }
              }}
              activeclassname="active">News
            </Link>
          </li>
          <li><Link to="/about" activeclassname="active">About</Link></li>
        </ul>

        {this.props.children}
      </div>
    );
  }
}

export default App;
