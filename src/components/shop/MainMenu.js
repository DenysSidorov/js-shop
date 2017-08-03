import React from "react";

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
                                    <li className="menu__menuHeader_item"><a href="">Главная</a></li>
                                    <li className="menu__menuHeader_item"><a href="">О нас</a></li>
                                    <li className="menu__menuHeader_item"><a href="">Оплата и доставка</a></li>
                                    <li className="menu__menuHeader_item"><a href="">Возврат и обмен</a></li>
                                    <li className="menu__menuHeader_item"><a href="">Блог</a></li>
                                    <li className="menu__menuHeader_item"><a href="">Контакты</a></li>
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