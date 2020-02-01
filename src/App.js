import React from 'react';
import chonker from './chonker.png'
import '../src/styles/App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src= {chonker} className="App-logo" alt="logo"></img>
        <p>
          Wow Chonkers!
        </p>
      </header>
    </div>
  );
}

export default App;
