import {hot} from 'react-hot-loader/root';
import React from 'react';
import ReactDom from 'react-dom';
import {Provider} from 'react-redux';
import {Router} from 'react-router-dom';
// import {BrowserRouter as Router} from 'react-router-dom';

import store, {history} from './redux/store/configureStore';
import Wrapper from './components/index';

const App = hot(Wrapper);

const container = document.getElementById('main');
if (container) {
  ReactDom.render(
    <Provider store={store}>
      <div>
        <Router history={history}>
          <App />
        </Router>
      </div>
    </Provider>,
    container
  );
}

console.log(process.env.NODE_ENV, ' MODE IN REACT');
