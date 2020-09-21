import React, {FC, useEffect} from 'react';
import {Link} from 'react-router-dom';
import menu from './mobileMenu';

const Header: FC = () => {
  useEffect(() => {
    menu();
  }, []);
  return (
    <div className='adminPanHeader'>
      <div className='adminPanHeader__left'>
        <span className='adminPanHeader__title'>Админ Панель</span>
        <Link to='/' className='adminPanHeader__btn'>
          На сайт
        </Link>
        <div className='navBurger'>
          <span />
        </div>
      </div>
      <div className='adminPanHeader__right'>{/* <span className="adminPanHeader__btn">Выйти</span> */}</div>
    </div>
  );
};
export default Header;
