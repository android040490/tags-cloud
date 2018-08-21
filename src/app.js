import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import {Router, Route, Redirect, browserHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';
import './style.scss';

import TagsCloud from 'containers/TagsCloud';
import TagPage from 'containers/TagPage';

import {store} from './redux-store/store';

const history = syncHistoryWithStore( browserHistory, store);


render(
  <Provider store={store}>
    <Router history={history}>
        <Redirect from='/' to='/home'/>
        <Route path='/home' component={TagsCloud}/>
        <Route path='/home/:itemId' component={TagPage}/>
    </Router>
  </Provider>, 
  document.getElementById('app'));