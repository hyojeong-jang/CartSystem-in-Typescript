import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import Root from './routes/index';
import rootReducer from './reducers/index'


const store = createStore(
  rootReducer
);

ReactDOM.render(
  <Provider store={store}>
    <Root />
  </Provider>,
  document.getElementById('root') as HTMLElement
);

