import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom'

import App from './components/App/App';
import About from './components/About';
import News from './components/News';
import Detail from './components/Detail'
// import ErrorPage from './components/Error'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  (
    <HashRouter>
      <div>
        <Route path="/" component={App} />
        <Switch>
          <Route path="/news/:id" component={News} />
          <Route path="/about" component={About} />
        </Switch>
        <Route path="/news/:id/details" component={Detail} />
      </div>
    </HashRouter>
  ),
  document.getElementById('root')
);
registerServiceWorker();
