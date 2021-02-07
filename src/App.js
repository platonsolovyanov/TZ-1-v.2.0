import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, LoginComponent, News, Profile } from './pages/index';
import MenuComponent from './components/MenuComponent';
import { Provider } from 'react-redux';
import { store } from './store/store';

window.store = store

function App() {



  return (
    <Provider store={store}>
      <MenuComponent />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/news" component={News} exact />
        <Route path="/profile" component={Profile} exact />
        <Route path="/login" component={LoginComponent} exact />
      </Switch>
    </Provider>
  );
}

export default App;


