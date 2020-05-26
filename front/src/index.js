import { hot } from 'react-hot-loader/root';
import React from 'react';
import ReactDom from 'react-dom';
import App from './components/App';

const AppWrapper = hot(App);

ReactDom.render(<AppWrapper />, document.getElementById('root'));

// if(module.hot){
//   module.hot.accept()
// }
