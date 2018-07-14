/*
  Import Dependencies
*/
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute } from 'react-router'
import 'babel-polyfill';
import Main from './container/Main.js';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';
import css from  './styles/style.styl';
import store, { history } from './store';

import Raven from 'raven-js';
import { sentry_url } from '/Users/yuriikalashnikov/Desktop/Learn-Redux-master/client/data/config.js';
       if(window) {
Raven.config(sentry_url).install();
}
Raven.captureMessage('Something bad happened')
//Raven.showReportDialog();

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Main}>
        <IndexRoute component={PhotoGrid} />
        <Route path="view/:id" component={Single} />
      </Route>
    </Router>
  </Provider>
)

render(router, document.getElementById('root'))

