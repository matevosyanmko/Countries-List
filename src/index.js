import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// style
import './index.css';
import 'antd/dist/antd.css';
// redux modules
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Store } from './store/reducers';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './store/sagas';
import * as serviceWorker from './serviceWorker';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  Store,
  compose(
    applyMiddleware(sagaMiddleware),
    composeWithDevTools()
  )
);
//
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
serviceWorker.unregister();
