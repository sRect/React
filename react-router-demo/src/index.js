import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'

import App from './components/App/App';
// import About from './components/About';
// import News from './components/News';
// import Detail from './components/Detail'
import NoMatch from './components/Error'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  (
    <HashRouter>
      <div>
        <Switch>
          <Route path="/" exac component={App} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </HashRouter>
  ),
  document.getElementById('root')
);
registerServiceWorker();
