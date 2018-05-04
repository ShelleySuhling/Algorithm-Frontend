import React from 'react';
import { Router, Route } from 'react-router';
import App from './App';
import BlogHome from './containers/BlogHome';
import BlogPost from './containers/BlogPost';
import Callback from './callback/Callback';
import Auth from './auth/Auth';
import history from './history';

const auth = new Auth();

const handleAuthentication = ({location}) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();
  }
}

export const makeMainRoutes = () => {
  return (
      <Router history={history}>
        <div>
          <Route path="/" render={(props) => <App auth={auth} {...props} />} />
          <div className="App-body">
            <Route path="/" render={(props) => <BlogHome auth={auth} {...props} />} />
            <Route path="/post/:slug" render={(props) => <BlogPost auth={auth} {...props} />} />
            <Route path="/callback" render={(props) => {
              handleAuthentication(props);
              return <Callback {...props} /> 
            }}/>
          </div>
        </div>
      </Router>
  );
}
