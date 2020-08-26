import React from 'react';
import LoadingBar from 'react-redux-loading-bar';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {Link, NavLink} from 'react-router-dom';
import {HashLink} from 'react-router-hash-link';
import './index.less';
import MenuCart from '../menu-cart/MenuCart';
import CategoryMenu from '../menu-category/CategoryMenu';

class MainMenu extends React.Component {
  render() {
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
                {/* <div className="search"> */}
                {/* <div className="search__input"> */}
                {/* <i className="fa fa-search search-font-main-menu"></i> */}
                {/* <input className="search__input_input" type="text" placeholder="Поиск на сайте"/> */}
                {/* </div> */}
                {/* </div> */}
                <div className='menu'>
                  <CategoryMenu />
                  <ul className='menu__menuHeader'>
                    <li className='menu__menuHeader_item'>
                      <Link to='/'>Главная</Link>
                    </li>
                    <li className='menu__menuHeader_item'>
                      {/* <Link to="/#aboutUs">О нас</Link> */}
                      <HashLink to='/#aboutUs'>О нас</HashLink>
                    </li>
                    <li className='menu__menuHeader_item'>
                      <HashLink to='/#price'>Цены</HashLink>
                    </li>
                    {/* <li className="menu__menuHeader_item"> */}
                    {/*    <NavLink to="/payment-and-delivery" activeStyle={{color: '#2EA9FD'}}> */}
                    {/*        Оплата и доставка</NavLink> */}
                    {/* </li> */}
                    {/* <li className="menu__menuHeader_item"> */}
                    {/*    /!*<a href="">Возврат и обмен</a>*!/ */}
                    {/*    <NavLink to="/cashback-and-exchange" activeStyle={{color: '#2EA9FD'}}> */}
                    {/*        Возврат и обмен</NavLink> */}
                    {/* </li> */}
                    {/* <li className="menu__menuHeader_item"> */}
                    {/* <NavLink to="/blog" activeStyle={{color: '#2EA9FD'}}>Блог</NavLink> */}
                    {/* </li> */}
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
  }
}

export default MainMenu;
