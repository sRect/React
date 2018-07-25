import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route } from 'react-router-dom'

import App from './components/App/App';
// import About from './components/About';
// import News from './components/News';
// import Detail from './components/Detail'
// import ErrorPage from './components/Error'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  (
    <HashRouter>
      <div>
        <Route path="/" exac component={App} />
        {/* <Route path="/news/:id" component={News} />
        <Route path="/about" component={About} /> */}
        {/* <Route path="/news/:id/details" component={Detail} /> */}
      </div>
    </HashRouter>
  ),
  document.getElementById('root')
);
registerServiceWorker();
