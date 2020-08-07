import {hot} from 'react-hot-loader/root';
import React from 'react';
import ReactDom from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import {createStore} from 'redux';
// import {store} from './redux/store/configureStore';
// import Wrapper from './components/Wrapper';

const Wrapper = () => {
  return <div>Test</div>;
};

const App = hot(Wrapper);

const container = document.getElementById('main');
if (container) {
  ReactDom.render(
    <Provider store={createStore((state) => state)}>
      <div>
        <Router>
          <App />
        </Router>
      </div>
    </Provider>,
    container
  );
}

console.log(process.env.NODE_ENV, ' MODE IN REACT');

// import React from 'react';
// import ReactDom from 'react-dom';
// import Main from './components/Main';
//
// const a = require('react-hot-loader/root');
//
// const AppWrapper = a.hot(Main);
//
// ReactDom.render(<AppWrapper />, document.getElementById('main'));
//
// // if(module.hot){
// //   module.hot.accept()
// // }
