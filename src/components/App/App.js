import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <br/>
        <p>Gallery goes here</p>
        <img src="images/Black_Duck.jpg"/>
        <img src="images/Cotton_Tops.jpg" />
        <img src="images/Mallard_Drake.jpg" />
        <img src="images/Pintail_Drake.jpg" />
      </div>
    );
  }
}

export default App;
