import React from 'react';
import { Router, IndexRoute, Route } from 'react-router';

import App from './App';
import BlogHome from './containers/BlogHome';
import BlogPost from './containers/BlogPost';
import Callback from './callback/Callback';
import Auth from './auth/Auth';

const auth = new Auth();

const handleAuthentication = ({location}) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();
  }
}


const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={App} >
      <IndexRoute component={BlogHome} />
      <Route path="/post/:slug" component={BlogPost} />
      <Route path="/callback" render={(props) => {
            handleAuthentication(props);
          return <Callback {...props} /> }}/>
    </Route>
  </Router>
);

export default Routes;