import React, { Component } from 'react';
import Navigation from './components/Navigation'
import './App.css'
import createHistory from "history/createBrowserHistory"

import Auth from './auth/Auth'
const history = createHistory()

class App extends Component {
  render() {
    console.log(this.props)
    return (
      <div className="App">
        <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet"/>
          <Navigation/>
          <div className="App-body">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;