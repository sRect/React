import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import './index.css';
import Home from './pages/Home';
import WebWorker from './pages/WebWorker'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Provider store={store}>
    <div>
      <Home />
      <hr />
      <WebWorker />
    </div>
  </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
