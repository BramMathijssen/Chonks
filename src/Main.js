import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom"

import Home from './Home'
import Gallery from './Gallery'
import Chonky from './Chonky'


class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1>Simple SPA</h1>
          <ul className="header">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/chonky">Chonky</NavLink></li>
            <li><NavLink to="/gallery">Gallery</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/chonky" component={Chonky}/>
            <Route path="/gallery" component={Gallery}/>

          </div>
        </div>
      </HashRouter>
    );
  }
}

export default Main;