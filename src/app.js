import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Sidebar from './containers/Sidebar';
import MessagesList from './containers/MessagesList';
import AddMessage from './containers/AddMessage';
import './styles/style.scss';

import chat from './reducers';

const store = createStore(chat);


const App = () => (
  <div className="app">
    <Sidebar />
    <main id="main" className="main container">
      This is the main section where you will see the conversation.
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
