import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Homepage from './pages/homepage/homepage';

function App() {
  return (
    <div>
      <Route exact path="/" component={Homepage} />
      {/* <Homepage /> */}
    </div>
  );
}

export default App;
