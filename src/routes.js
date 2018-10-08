import React from 'react';
import { Router, Route } from 'react-router';
import App from './App';
import Home from './containers/Home';
import SortingPage from './containers/SortingPage'
import history from './history';



export const makeMainRoutes = () => {
  return (
      <Router history={history}>
        <div>
          <Route path="/" render={(props) => <App {...props} />} />
          <div className="App-body">
            <Route path="/" render={(props) => <Home {...props} />} />
            <Route path="/sorting" render={(props) => <SortingPage {...props} />} /> 
          </div>
        </div>
      </Router>
  );
}
