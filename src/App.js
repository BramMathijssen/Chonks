import React from 'react';
// import chonker from './assets/chonker.png'
import '../src/styles/App.scss';
import '../src/styles/Global.scss'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  }
  from "react-router-dom";

import Home from './pages/Home.js'
import Chonks from './pages/Chonks.js'
import Scene from './components/scene.js'
import PageNotFound from './pages/PageNotFound'


 function App() {
  return (
    //Possibly have to add <Suspense> to fix async errors in the future
    <Router>
      <Switch>
        <Route exact path = "/">
          <Home />
        </Route>
        <Route path = "/chonkers">
          <Chonks />
        </Route>
        <Route path = "/scene">
          <Scene />
        </Route>
        <Route path="/404">
          <PageNotFound />
        </Route>
        <Route path="/*">
          <Redirect to="/404" />
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
