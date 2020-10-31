import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './components/App/App';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import store, { persistor } from './store';
import { PersistGate } from 'redux-persist/integration/react'
import Home from './components/Home/Home';
import Logout from './components/Logout/Logout';
// import { getAllProjects } from './actionCreators'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

// store.dispatch(getAllProjects())

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/logout">
              <Logout />
            </Route>
            <Route path="/register">
              <SignUp />
            </Route>
            <Route path="/projects">
              <App />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
