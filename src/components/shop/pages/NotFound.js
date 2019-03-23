import React from 'react';
import {setMetaTag, setTitle} from "../helpers/lib/utils";

const NotFound = (props) => {
  window.scrollTo(0, 0);
  setTitle('Не найдено');
  setMetaTag('description', 'Страница не найдена в shop-ukraine.pro');
  setMetaTag('keywords', 'портфели, сумки, рюкзаки, купить для школы, shop-ukraine.pro');

  return (<h1>404 Sorry! Not Found Page with route: {props.location.pathname}</h1>)
}
export default NotFound;