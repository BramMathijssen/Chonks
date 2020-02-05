import React, { Component } from "react";
import Navigation from '../components/navigation'
import * as THREE from "three";

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <header className="header-section">
          <Navigation></Navigation>
          <div className="header-content">
            <h1>WOW!</h1>
            <h2>CHONKERS</h2>
          </div>
        </header>
        <main className="main">
          <div className="content-section-one">
            <h2>Home</h2>
          </div>
        </main>
      </React.Fragment>
    );
  }
}

export default Home;