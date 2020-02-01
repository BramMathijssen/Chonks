import React from 'react';
import chonker from './assets/chonker.png'
import '../src/styles/App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link}
  from "react-router-dom";

import Home from './Home.js'
import Chonks from './Chonks.js'


 function App() {
  return (
    <Router>
      <Switch>
        <Route exact path = "/">
          <Home />
        </Route>
        <Route path = "/chonkers">
          <Chonks />
        </Route>
      </Switch>
    </Router>
    // <div className="App">
    //   <header className="App-header">
    //     <img src= {chonker} className="App-logo" alt="logo"></img>
    //     <p>
    //       Wow Chonkers!
    //     </p>
    //   </header>
    // </div>
  );
}

export default App;
