import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';

import Routes from './routes';
import injectTapEventPlugin from 'react-tap-event-plugin';
 
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

ReactDOM.render(    
 <Routes history={browserHistory} />,
 document.getElementById('root')
);