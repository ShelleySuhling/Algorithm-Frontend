import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {browserHistory} from 'react-router';


class Navigation extends Component {

  constructor(props) {
    super(props);
  }

  handleClick = () => {
    console.log(browserHistory.getCurrentLocation())
    if(browserHistory.getCurrentLocation().pathname == '/'){
      window.location.reload();
    } else browserHistory.push('/')
  }

  render() {
    return <MuiThemeProvider>
            <AppBar title="Shelley's Blog" 
              onTitleClick={this.handleClick} 
              iconClassNameRight="muidocs-icon-navigation-expand-more"/>
          </MuiThemeProvider>
    }
}

export default Navigation;