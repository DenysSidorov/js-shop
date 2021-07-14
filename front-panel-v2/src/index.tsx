import React from 'react';
import ReactDOM from 'react-dom';
import {Router} from 'react-router-dom';

import {createBrowserHistory} from 'history';
import Wrapper from './components/index';
export const history = createBrowserHistory();

ReactDOM.render(
  <React.StrictMode>
      <Router history={history}>
          <Wrapper/>
      </Router>
  </React.StrictMode>,
  document.getElementById('root'));

if (module.hot) {
    module.hot.accept();
}
