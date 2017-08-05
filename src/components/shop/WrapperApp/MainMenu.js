import React from "react";
import {Link} from 'react-router-dom';
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
                                    <li className="menu__menuHeader_item">
                                        {/*<a href="">Главная</a>*/}
                                        <Link to="/">Главная</Link>
                                    </li>
                                    <li className="menu__menuHeader_item">
                                        {/*<a href="">О нас</a>*/}
                                        <Link to="/about-us">О нас</Link>
                                    </li>
                                    <li className="menu__menuHeader_item">
                                        {/*<a href="">Оплата и доставка</a>*/}
                                        {/*<Link to="/payment-and-delivery">Оплата и доставка</Link>*/}
                                        <Link to="/about-us/23321/213">Оплата и доставка</Link>
                                        <Link to="/blog/9999/312">Оплата и доставка</Link>
                                    </li>
                                    <li className="menu__menuHeader_item">
                                        {/*<a href="">Возврат и обмен</a>*/}
                                        <Link to="/cashback-and-exchange">Возврат и обмен</Link>
                                    </li>
                                    <li className="menu__menuHeader_item">
                                        {/*<a href="">Блог</a>*/}
                                        <Link to="/blog/123">Блог</Link>
                                    </li>
                                    <li className="menu__menuHeader_item">
                                        {/*<a href="">Контакты</a>*/}
                                        <Link to="/contacts">Контакты</Link>
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