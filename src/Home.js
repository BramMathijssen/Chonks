import React, { Component } from "react";
import Navigation from './navigation/navigation'

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <main className="main">
        <header className="header-section">
          <Navigation></Navigation>
          <div className="header-content">
            <h1>WOW!</h1>
            <h2>CHONKERS</h2>
          </div>
        </header>
        <div className="content-section-one">
          <h2>Home</h2>
        </div>
        </main>
      </React.Fragment>
    );
  }
}

export default Home;