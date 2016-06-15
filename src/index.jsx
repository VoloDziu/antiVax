import 'babel-polyfill';

import './styles/global.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import {Router, Route, IndexRedirect, browserHistory} from 'react-router';

import configureStore from './store';
import App from './App';
import questionsRouter from './Questions';
import staticRouter from './Static';
import blogRouter from './Blog';
import searchRouter from './Search';


const store = configureStore();

ReactDOM.render((
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRedirect to="/questions" />

        {questionsRouter}
        {blogRouter}
        {searchRouter}
        {staticRouter}
      </Route>
    </Router>
  </Provider>
), document.getElementById('app'));
