import ReactDOM from 'react-dom';
import { makeMainRoutes } from './routes';

import injectTapEventPlugin from 'react-tap-event-plugin';
 
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();
const routes = makeMainRoutes();

ReactDOM.render(
  routes,
  document.getElementById('root')
);
