import React from 'react';
import './App.scss';
import SidePanel from './../SidePanel/SidePanel';
import CesiumView from './../CesiumView/CesiumView';

function App() {
  return (
    <div className="App">
      <SidePanel />
      <CesiumView  className="CS_view"/>
    </div>
  );
}

export default App;
