import React from 'react';
import { Route } from 'react-router-dom';
import { Home, Login, News, Profile } from './pages/index';
import Menu from './components/Menu';
import { Provider } from 'react-redux';
import { store } from './store/store';

window.store = store

function App() {

  const verificationLogPas = () => {
    console.log('app')
  }

  return (
    <Provider store={store}>
      <Menu verificationLogPas={verificationLogPas} />
      <Route path="/" component={Home} exact />
      <Route path="/news" component={News} exact />
      <Route path="/profile" component={Profile} exact />
      <Route verificationLogPas={verificationLogPas} path="/login" component={Login} exact />
      {/* {
        localStorage.validation !== undefined ? <Route path="/profile" component={Profile} exact /> : <Route path="/login" component={Login} exact />
      } */}
    </Provider>
  );
}

export default App;


