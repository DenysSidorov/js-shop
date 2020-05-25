// import { hot } from 'react-hot-loader/root';
import React from 'react';
import ReactDom from 'react-dom';
import App from './components/App';

// const Application = hot(module)(MySuperApplication)

ReactDom.render(<App/>, document.getElementById('root'));

// if(module.hot){
//   module.hot.accept()
// }
