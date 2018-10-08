import React, { Component } from 'react';
import Navigation from './components/Navigation'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"/>
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
          <Navigation/>
      </div>
    );
  }
}

export default App;