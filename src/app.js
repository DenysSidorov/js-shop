//import responsiveTabs from 'responsive-tabs';
//import $ from 'jquery';
import MyCo from './components/test';
import ReactDom from 'react-dom';
import React from 'react';
ReactDom.render(<MyCo/>, document.getElementById('reactContent'));

window.$ = jQuery;
window.jQuery = jQuery;


console.log('test');



