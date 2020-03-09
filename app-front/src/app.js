//import responsiveTabs from 'responsive-tabs';
import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
// wrap App for connect components to store
import { Provider } from 'react-redux';
// connect router to redux
import { ConnectedRouter } from 'react-router-redux';
// our store with config
import store, { history } from './store';
require('dotenv').config();
// import App from './containers/app';


import $ from 'jquery';


/**  new react-router-redux  for  react-router 4
     https://github.com/ReactTraining/react-router/tree/master/packages/react-router-redux
     old react-router-redux  for  react-router 3
     https://github.com/reactjs/react-router-redux
*/

import App from './components/shop';

if(location.protocol !== 'https:'){
  window.location.replace('https://' + location.hostname + location.pathname+ location.search);
}

// TODO https://github.com/xiaolin/react-image-gallery
document.addEventListener("DOMContentLoaded", function(event) {
    const container  = document.getElementById('reactContent');
    if(container) {
        ReactDom.render(
          <BrowserRouter>
            <Provider store={store}>
                <ConnectedRouter history={history}>
                    <App />
                </ConnectedRouter>
            </Provider>
          </BrowserRouter>
            , container);
    }
});

// add input mask
// https://github.com/insin/react-maskedinput

window.$ = $;
window.jQuery = $;
// window.Immutable = Immutable;

console.log(process.env.NODE_ENV, 'App ');
