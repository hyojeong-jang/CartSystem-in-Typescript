import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import * as reduxLogger from 'redux-logger';

import Root from './routes/index';
import StoreState from './reducers/index'

const middleware = [];

if (process.env.NODE_ENV !== "production") {
  middleware.push(reduxLogger.createLogger());
}

const store = createStore(
  StoreState,
  applyMiddleware(...middleware)
);

ReactDOM.render(
  <Provider store={store}>
    <Root />
  </Provider>,
  document.getElementById('root') as HTMLElement
);

