import React from "react";
import styles from './index.less'
class MenuInfoSection extends React.Component {
    render() {
        return (
            <div className="menuInfoSection left fullWidth ">
                <div className="container">
                    <div className="submenuBlock">
                        <div className="contactInfo">
                            <ul className="contactInfo__list-contacts-info">
                                <li>
                                    <a title="Позвонить на Киевстар" href="tel:0988351315"><i
                                        className="fa fa-phone"></i>&nbsp;(098)83-51-315</a>
                                </li>
                                <li>
                                    <a title="Позвонить на Life)" href="tel:0938875395"><i className="fa fa-phone"></i>&nbsp;(093)88-75-395</a>
                                </li>
                                <li>
                                    <a title="График работы, условия оплаты и доставки" href="#">
                                        <meta content="Mo-Fr 10:00-19:00"/>
                                            <i className="fa fa-clock-o"></i>&nbsp;10:00-19:00&nbsp;пн-пт</a>
                                </li>
                            </ul>
                        </div>
                        <div className="logoInfo">
                            <img className="logoInfo__logo-img" src="/img-static/good.jpg" alt=""/>
                        </div>
                        <div className="userInfo">
                            <ul className="userInfo__listInfo">
                                <li><a href="#">Ввойти в кабинет</a></li>
                                <li><a href="#">Регистрация</a></li>
                                <li><a href="#">Мой профиль</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MenuInfoSection;

