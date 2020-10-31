import React from 'react';
import './App.scss';
import { connect } from 'react-redux'
import SidePanel from '../SidePanel/SidePanel';
import CesiumView from '../CesiumView/CesiumView';
import { Redirect } from "react-router-dom";

// read about
// const CesiumView = React.lazy(() => import('../CesiumView/CesiumView'))
// const SidePanel = React.lazy(() => import('../SidePanel/SidePanel'))
// const Login = React.lazy(() => import('../Login/Login'))

function App(props) {
  return props.auth.isLoggedin ? (
    <div className="App">
      <SidePanel />
      <CesiumView  className="CS_view"/>
    </div>
  ) : <Redirect to="/login" />;
}

const mapReduxStateToProps = state => {
  return {
    auth: state.auth
  }
}

export default connect(mapReduxStateToProps)(App)
