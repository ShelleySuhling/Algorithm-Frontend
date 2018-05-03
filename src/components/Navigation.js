import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';



class Navigation extends Component {

  constructor(props, context) {
    super(props, context);
  }

  handleClick = () => {

  }

  render() {
    return <MuiThemeProvider>
            <AppBar title="Shelley's Blog" onTitleClick={this.handleClick} iconClassNameRight="muidocs-icon-navigation-expand-more"/>
          </MuiThemeProvider>
    }
}

export default Navigation;