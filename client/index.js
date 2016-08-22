import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, browserHistory } from 'react-router';
import promise from 'redux-promise';
import logger from 'redux-logger';

import reducers from './src/reducers/root_reducer';
import routes from './src/routes';

const createStoreWithMiddleware = applyMiddleware(promise, logger())(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory} routes={routes} />
	</Provider>
	, document.getElementById('app')
);
