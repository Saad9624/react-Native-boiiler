import React from 'react';

import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './src/container/reducers';
import Navigation from './src/routes';
const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

const App = () => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};

export default App;
