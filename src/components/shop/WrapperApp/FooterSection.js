import React from "react";

class FooterSection extends React.Component {
    render() {
        return (
            <div className="footerSection left fullWidth ">
                <div className="container">
                    <div className="footerMainBlock">

                        <div className="footerMainBlock__titles">
                            <div className="strip_double"></div>
                            <span>Телефоны для связи</span>
                            <div className="strip_double"></div>
                        </div>
                        <div className="footerMainBlock__phones">
                    <span className="menu_one_telFooter">
                        <i className="fa fa-mobile" aria-hidden="true"></i>
                        <a href="tel:+0931231243">093-123-12-43</a>
                    </span>
                            <span className="menu_one_telFooter">
                        <i className="fa fa-mobile" aria-hidden="true">

                        </i>
                        <a href="tel:+0679083278">067-908-32-78</a>
                    </span>
                        </div>

                        <div className="footerMainBlock__titles">
                            <div className="strip_double"></div>
                            <span>Узнавайте о новинках первыми</span>
                            <div className="strip_double"></div>
                        </div>
                        <div className="footerMainBlock__socials">
                            <span className="menu_one_soc"><i className="fa fa-facebook" aria-hidden="true"></i></span>
                            <span className="menu_one_soc"><i className="fa fa-twitter" aria-hidden="true"></i></span>
                            <span className="menu_one_soc"><i className="fa fa-google-plus" aria-hidden="true"></i></span>
                            <span className="menu_one_soc"><i className="fa fa-vk" aria-hidden="true"></i></span>
                        </div>

                        <div className="footerMainBlock__titles">
                            <div className="strip_double"></div>
                            <span>Дополнительная информация</span>
                            <div className="strip_double"></div>

                        </div>
                        <div className="footerMainBlock__payment-delivery">

                            <div className="footerMainBlock__payment-delivery_menu">

                                <div className="contactMenuBlockFooter">

                                    <ul className="contactMenuBlockFooter_main">
                                        <li className=""><a href="">Главная</a></li>
                                        <li className=""><a href="">О нас</a></li>
                                        <li className=""><a href="">Оплата и доставка</a></li>
                                        <li className=""><a href="">Возврат и обмен</a></li>
                                        <li className=""><a href="">Блог</a></li>
                                        <li className=""><a href="">Контакты</a></li>
                                    </ul>
                                </div>

                                <div className="contactMenuBlockFooter">

                                    <ul className="contactMenuBlockFooter_main">
                                        <li className=""><a href="">Новинки</a></li>
                                        <li className=""><a href="">Акции</a></li>
                                        <li className=""><a href="">Скидки</a></li>
                                        <li className=""><a href="">Популярное</a></li>
                                        <li className=""><a href="">Детские</a></li>
                                        <li className=""><a href="">Мужские</a></li>
                                    </ul>
                                </div>
                                <div className="socribeBtnBlockFooter">

                                </div>
                            </div>

                            <div className="footerMainBlock__socials_delivery">
                                <div className="imgFooterBlock">
                                    <img className="imgFooter" src="img-static/privatbank.png" alt=""/>
                                </div>
                                <div className="imgFooterBlock">
                                    <img className="nvpochta imgFooter" src="img-static/navaposhta.png" alt=""/>
                                </div>

                            </div>


                        </div>
                        <p className="footerMainBlock__payment-delivery_payment-afferta">
                            Украина, г. Киев, ул. Павловская, 10, тел. 0 800 751-752. Весь контент © 2017. Интернет-магазин
                            iLounge. Зазначені товарні знаки та продукція маркована знаками для товарів використовуються не в
                            комерційних цілях, а виключно для надання інформації користувачам про товар.
                            Источник: https://ilounge.ua/catalog/usb-kabeli-shnury-perehodniki-apple-ipad-kupit-kiev
                        </p>
                    </div>
                </div>
            </div>  
        )
    }
}

export default FooterSection;