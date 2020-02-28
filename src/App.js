import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './containers/Home';
import { Provider } from 'react-redux'

import store from './store/index';

const App = () => (
  <Provider store={store}>
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  </Provider>
);

export default App;
