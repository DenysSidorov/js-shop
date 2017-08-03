//import responsiveTabs from 'responsive-tabs';
//import $ from 'jquery';
import App from './components/shop';
import ReactDom from 'react-dom';
import React from 'react';

document.addEventListener("DOMContentLoaded", function(event) {

     ReactDom.render(
         <App/>
         , document.getElementById('reactContent'));
});

window.$ = jQuery;
window.jQuery = jQuery;



