import {hot} from 'react-hot-loader/root';
import React from 'react';
import ReactDom from 'react-dom';
import {Provider} from 'react-redux';
import {ConnectedRouter} from 'connected-react-router';
// import {Router} from 'react-router-dom';
// import {BrowserRouter as Router} from 'react-router-dom';
// import {createBrowserHistory} from 'history';
import store, {history} from './redux/store/configureStore';
import Wrapper from './components/index';

const App = hot(Wrapper);
// const history = createBrowserHistory();

const container = document.getElementById('main');
if (container) {
  ReactDom.render(
    <Provider store={store}>
      <div>
        <ConnectedRouter history={history}>
          <App />
        </ConnectedRouter>
      </div>
    </Provider>,
    container
  );
}

console.log(process.env.NODE_ENV, ' MODE IN REACT');
