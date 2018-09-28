import React from 'react';
import { render } from 'react-dom';

const root = document.getElementById('root');


const App = () => (
  <div className="app">
    <aside>
      This is the sidebar where you will see a list of users.
    </aside>
    <main>
      This is the main section where you will see the conversation.
    </main>
  </div>
);

render(
  <App />,
  root,
);

module.hot.accept();
