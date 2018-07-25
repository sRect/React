import React, { Component } from 'react';
import { Link } from 'react-router-dom'

// import News from '../News'
// import About from '../About'
// import Detail from '../Detail'

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
        <h2>App</h2>
        <ul>
          <li>
            <Link
              to={{
                pathname: "/news/888",
                search: "?title=10086",
                hash: "hello",
                state: { createTime: this.state.time }
              }}
              replace
              activeclassname="active">News
            </Link>
          </li>
          <li><Link to="/about" activeclassname="active" replace>About</Link></li>
        </ul>

        <div>
          {/* <Switch>
            <Route path="/news/:id/details" component={Detail} />
            <Route path="/news/:id" component={News} />
            <Route path="/about" component={About} />
          </Switch> */}
        </div>
      </div>
    );
  }
}

export default App;
