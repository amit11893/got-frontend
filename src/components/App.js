import React from 'react';
import { Provider } from 'react-redux';
import store from './../redux/store';

import Battles from './Battles';
import Search from './Search';
import './../index.css';

function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <h1>Game of Thrones Battles</h1>
        <Search />
        <Battles />
      </div>
    </Provider>
  );
}

export default App;
