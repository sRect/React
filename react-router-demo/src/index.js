import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'

import App from './components/App/App';
import About from './components/About';
import News from './components/News';
import Detail from './components/Detail'
import ErrorPage from './components/Error'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  (
    <HashRouter>
      <div>
        <Route path="/" exac component={App} />
        <Switch>
          <Route path="/news/:id/details" component={Detail} />
          <Route path="/news/:id" component={News} />
          <Route path="/about" component={About} />
          <Route path="/404" component={ErrorPage} />
          <Redirect from='*' to='/404' />
        </Switch>
      </div>
    </HashRouter>
  ),
  document.getElementById('root')
);
registerServiceWorker();
