import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MenuItem from 'material-ui/MenuItem';
import Popover, {PopoverAnimationVertical} from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import Auth from '../auth/Auth.js';
import history from '../history';

const auth = new Auth();

class Navigation extends Component {

  constructor(props) {
    super(props);
    this.state = {open: false}
  }

  handleToggle = () => this.setState({open: !this.state.open});

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };

  handleTitleClick = () => {
    if(history.location.pathname === '/'){
      window.location.reload();
    } else {
      history.push('/')
      window.location.reload();
    }
  }

  handleHamburgerClick = (event) => {
    // This prevents ghost click.
    event.preventDefault();

    this.setState({
      open: true,
      anchorEl: event.currentTarget,
    });
  }

  clickLogin = () => {
    auth.login();
  }

  clickLogout = () => {
    auth.logout();
  }

  render() {
    return <MuiThemeProvider>
            <AppBar title="Shelley's Blog" 
              onTitleClick={this.handleTitleClick} 
              onLeftIconButtonClick={this.handleToggle}
              iconClassNameRight="muidocs-icon-navigation-expand-more"/>
            
            <Popover
              open={this.state.open}
              anchorEl={this.state.anchorEl}
              anchorOrigin={{horizontal: 'left', vertical: 'top'}}
              targetOrigin={{horizontal: 'left', vertical: 'top'}}
              onRequestClose={this.handleRequestClose}
              animation={PopoverAnimationVertical}
              style={{margin: "65px 0"}}
              >
              <Menu>
                {auth.isAuthenticated() ? <MenuItem primaryText="Log Out" onClick={this.clickLogout}/> : 
                                          <MenuItem primaryText="Log In" onClick={this.clickLogin}/>}
                <MenuItem primaryText="Help &amp; feedback" />
                <MenuItem primaryText="Settings" />
                <MenuItem primaryText="Sign out" />
              </Menu>
            </Popover>
          </MuiThemeProvider>
    }
}

export default Navigation;