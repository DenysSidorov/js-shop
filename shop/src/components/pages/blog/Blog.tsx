import React, {FC, useEffect} from 'react';
import './index.scss';
import {setMetaTag, setTitle} from '../../../helpers/libs/utils';

const Blog: FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    setTitle('Блог');
    setMetaTag('description', 'Блог о картинах на дереве, картины на досках в Украине');
    setMetaTag(
      'keywords',
      'интернет-магазин картин, украинские картины, картины для интерьера, картины на дереве, картины на досках, doshki.com, doshki.kom, картины украина, деревянные картины',
    );
  }, []);

  return (
    <div className='blogPage-container'>
      <p>Постов нет !</p>
    </div>
  );
};

export default Blog;
