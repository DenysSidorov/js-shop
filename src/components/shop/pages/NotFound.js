import React from 'react';
import {setMetaTag, setTitle} from "../helpers/lib/utils";

const NotFound = (props) => {
  window.scrollTo(0, 0);
  setTitle('Не найдено');
  setMetaTag('description', 'Страница не найдена на doshki.com');
  setMetaTag('keywords', 'интернет-магазин картин, украинские картины, картины для интерьера, картины на дереве, картины на досках, doshki.com, картины украина, деревянные картины');

  return (<h1>404 Sorry! Not Found Page with route: {props.location.pathname}</h1>)
}
export default NotFound;
