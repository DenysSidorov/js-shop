import React from 'react';
import ReactDom from 'react-dom';
import Main from './components/Main';

const a = require('react-hot-loader/root');

const AppWrapper = a.hot(Main);

ReactDom.render(<AppWrapper />, document.getElementById('main'));

// if(module.hot){
//   module.hot.accept()
// }
