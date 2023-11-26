import React, {FC} from 'react';
import LoadingBar from 'react-redux-loading-bar';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {Link, NavLink} from 'react-router-dom';
import {HashLink} from 'react-router-hash-link';
import './index.less';
import MenuCart from '../menu-cart/MenuCart';
import CategoryMenu from '../menu-category/CategoryMenu';

const MainMenu: FC = () => {
  return (
    <ReactCSSTransitionGroup
      transitionName='mainMenu'
      transitionAppear
      transitionAppearTimeout={300}
      transitionEnter={false}
      transitionLeave={false}
    >
      <div>
        <div className='menuSection left fullWidth js_search-height'>
          <div className='container'>
            <div className='flexWrapMenu'>
              <div className='menu'>
                <CategoryMenu />
                <ul className='menu__menuHeader'>
                  <li className='menu__menuHeader_item'>
                    <Link to='/shop'>Главная</Link>
                  </li>
                  <li className='menu__menuHeader_item'>
                    <HashLink to='/#aboutUs'>О нас</HashLink>
                  </li>
                  <li className='menu__menuHeader_item'>
                    <HashLink to='/#price'>Цены</HashLink>
                  </li>
                  <li className='menu__menuHeader_item'>
                    <NavLink to='/contacts' activeStyle={{color: '#2EA9FD'}}>
                      Контакты
                    </NavLink>
                  </li>
                </ul>
                <MenuCart />
              </div>
            </div>
          </div>
          <LoadingBar style={{backgroundColor: '#2EA9FD', height: '3px'}} />
        </div>
        <div className='left fullWidth js_search-margin' />
      </div>
    </ReactCSSTransitionGroup>
  );
};

export default MainMenu;
