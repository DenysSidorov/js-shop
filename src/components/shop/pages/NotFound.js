import React from 'react';
import {setTitle} from "../helpers/lib/utils";

const NotFound = (props) => {
  window.scrollTo(0, 0);
  setTitle('Не найдено');
  return (<h1>404 Sorry! Not Found Page with route: {props.location.pathname}</h1>)
}
export default NotFound;