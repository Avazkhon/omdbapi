import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './containers/Home';
import CardFilm from './containers/CardFilm';
import { Provider } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';
import store from './store/index';

const App = () => (
  <Provider store={store}>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/card/:imdbID" component={CardFilm} />
    </Switch>
  </Provider>
);

export default App;
