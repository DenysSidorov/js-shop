import React, {FC} from 'react';
import './index.scss';

const LinksToImages: FC = () => {
  return (
    <div className='linksToImages'>
      <span className='linksToImages_text'>
        Не нашли то, что искали - вышлите свое фото или найдите больше изображений тут&nbsp;
        <a href='https://unsplash.com/' target='_blank' className='linksToImages_text_link' rel='noreferrer'>
          unsplash
        </a>
        ,{' '}
        <a href='https://ru.depositphotos.com/' target='_blank' className='linksToImages_text_link' rel='noreferrer'>
          depositphotos
        </a>
        &nbsp;или{' '}
        <a href='https://www.shutterstock.com/' target='_blank' className='linksToImages_text_link' rel='noreferrer'>
          shutterstock
        </a>
      </span>
    </div>
  );
};

export default LinksToImages;
