import React from 'react';
import { render } from 'react-dom';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import { setupGame } from './actions';
import App from './containers/App';
import reducer from './reducers';

const middleware = process.env.NODE_ENV === 'production' ?
  [ thunk ] :
  [ thunk, logger() ];

const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore);
const store = createStoreWithMiddleware(reducer);

setupGame(store.dispatch);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
