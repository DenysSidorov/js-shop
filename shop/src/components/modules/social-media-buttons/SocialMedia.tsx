import React, {FC} from 'react';
import {Link} from 'react-router-dom';
import './index.scss';

const SocialMedia: FC = () => {
  return (
    <div className='socialMedia__container'>
      <div className='fab'>
        <span className='fab-action-button'>
          <i className='fab-action-button__icon' />
        </span>
        <ul className='fab-buttons'>
          <li className='fab-buttons__item'>
            <a
              href='https://www.instagram.com/doshki.kom/'
              target='_blank'
              className='fab-buttons__link fab-buttons__link_inst'
              data-tooltip='Instagram'
              rel='noreferrer'
            >
              <i className='fa fa-instagram main-cart__ico' />
            </a>
          </li>
          <li className='fab-buttons__item'>
            <Link to='/shop' href='#' className='fab-buttons__link' data-tooltip='Главная'>
              <i className='fa fa-home main-cart__ico' />
            </Link>
          </li>
          <li className='fab-buttons__item'>
            <Link to='/order' href='#' className='fab-buttons__link' data-tooltip='Корзина'>
              <i className='fa fa-shopping-cart main-cart__ico' />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SocialMedia;
