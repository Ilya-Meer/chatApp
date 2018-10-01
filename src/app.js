import '../node_modules/regenerator-runtime/runtime';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import Sidebar from './containers/Sidebar';
import MessagesList from './containers/MessagesList';
import AddMessage from './containers/AddMessage';
import reducers from './reducers';
import './styles/style.scss';
import setupSocket from './sockets';
import handleNewMessage from './sagas';
import username from './utils/name';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducers,
  applyMiddleware(sagaMiddleware),
);

const socket = setupSocket(store.dispatch, username);
sagaMiddleware.run(handleNewMessage, { socket, username });

const App = () => (
  <div className="app">
    <Sidebar />
    <main id="main" className="main container">
      <MessagesList />
      <AddMessage />
    </main>
  </div>
);


const root = document.getElementById('root');

render(
  <Provider store={store}>
    <App />
  </Provider>,
  root,
);

module.hot.accept();
