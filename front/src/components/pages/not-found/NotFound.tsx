import React, {FC} from 'react';
import {setMetaTag, setTitle} from '../../../helpers/libs/utils';
import {IHistory} from '../../../interfaces';

interface INotFound extends IHistory {}

const NotFound: FC<INotFound> = ({location}) => {
  window.scrollTo(0, 0);
  setTitle('Не найдено');
  setMetaTag('description', 'Страница не найдена на doshki.com');
  setMetaTag(
    'keywords',
    'интернет-магазин картин, украинские картины, картины для интерьера, картины на дереве, картины на досках, doshki.com, doshki.kom, картины украина, деревянные картины'
  );

  return <h1>Извините, но страница не найдена! Адрес: {location.pathname}</h1>;
};
export default NotFound;
