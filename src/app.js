//import responsiveTabs from 'responsive-tabs';
import React from 'react';
import ReactDom from 'react-dom';
// wrap App for connect components to store
import { Provider } from 'react-redux';
// connect router to redux
import { ConnectedRouter } from 'react-router-redux';
// our store with config
import store, { history } from './store';
import App from './containers/app';



import App from './components/shop';
const container  = document.getElementById('reactContent');

document.addEventListener("DOMContentLoaded", function(event) {
     ReactDom.render(
         <Provider store={store}>
              <ConnectedRouter history={history}>
                   <div>
                        <App />
                   </div>
              </ConnectedRouter>
         </Provider>

         ,container);
});


//import $ from 'jquery';
// window.$ = jQuery;
// window.jQuery = jQuery;



