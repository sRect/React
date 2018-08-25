import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom'


import News from '../News'
import About from '../About'
import Detail from '../Detail'
import Waves from '../Waves'
import TikTok from '../TikTok'

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
        <ul className="clearfix">
          <li className="fl">
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
          <li className="fl"><Link to="/about" activeclassname="active" replace>About</Link></li>
          <li className="fl"><Link to="/waves" activeclassname="active" replace>Waves(canvas)</Link></li>
          <li className="fl"><Link to="/tiktok" activeclassname="active" replace>TikTok</Link></li>
        </ul>

        <div>
          <Switch>
            <Route path="/news/:id/details" component={Detail} />
            <Route path="/news/:id" component={News} />
            <Route path="/tiktok" component={TikTok} />
            <Route path="/about" component={About} />
            <Route path="/waves" component={Waves} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
