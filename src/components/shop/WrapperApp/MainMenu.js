import React from "react";
import {Link, NavLink} from 'react-router-dom';
import { connect } from 'react-redux';
class MainMenu extends React.Component {
    render() {
        return (
            <div>
                <div className="menuSection left fullWidth js_search-height">
                    <div className="container">
                        <div className="flexWrapMenu">
                            <div className="search">
                                <div className="search__input">
                                    <i className="fa fa-search search-font-main-menu"></i>
                                    <input className="search__input_input" type="text" placeholder="Поиск на сайте"/>
                                </div>
                            </div>
                            <div className="menu">
                                <ul className="menu__menuHeader">
                                    <li className="menu__menuHeader_item"><Link to="/">Главная</Link></li>
                                    <li className="menu__menuHeader_item">
                                        <NavLink to="/about-us" activeStyle={{color: '#2EA9FD'}}>О нас</NavLink>
                                    </li>
                                    <li className="menu__menuHeader_item">
                                        <NavLink to="/payment-and-delivery" activeStyle={{color: '#2EA9FD'}}>
                                            Оплата и доставка</NavLink>
                                    </li>
                                    <li className="menu__menuHeader_item">
                                        {/*<a href="">Возврат и обмен</a>*/}
                                        <NavLink to="/cashback-and-exchange" activeStyle={{color: '#2EA9FD'}}>
                                            Возврат и обмен</NavLink>
                                    </li>
                                    <li className="menu__menuHeader_item">
                                        <NavLink to="/blog" activeStyle={{color: '#2EA9FD'}}>Блог</NavLink>
                                    </li>
                                    <li className="menu__menuHeader_item">
                                        <NavLink to="/contacts" activeStyle={{color: '#2EA9FD'}}>Контакты</NavLink>
                                    </li>
                                </ul>
                                <span className="main-cart">
                                    <i className="fa fa-shopping-cart main-cart__ico" data-js_count="5"></i>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="left fullWidth js_search-margin"></div>
            </div>
        )

    }
}

export default MainMenu;