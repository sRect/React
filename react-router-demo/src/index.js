import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route } from 'react-router-dom'

import App from './components/App/App';
import About from './components/About';
import News from './components/News';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  (
    <HashRouter>
      <div>
        <Route path="/" component={App} />
        <Route path="/news/:id" component={News} />
        <Route path="/about" component={About} />
      </div>
    </HashRouter>
  ),
  document.getElementById('root')
);
registerServiceWorker();
