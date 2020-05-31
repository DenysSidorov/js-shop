import {hot} from 'react-hot-loader/root';
import React from 'react';
import ReactDom from 'react-dom';
import Main from './components/Main';

const AppWrapper = hot(Main);

ReactDom.render(<AppWrapper />, document.getElementById('main'));

// if(module.hot){
//   module.hot.accept()
// }
