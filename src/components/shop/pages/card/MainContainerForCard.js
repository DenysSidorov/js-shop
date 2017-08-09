import React from "react";
import styles from './mainContainerForCard.less'

class MainContainerForCard extends React.Component {
    render() {
        return (
            <div className="mainContainerForCard">
                <div className="mainContainerForCard__imageBlock">
                    <div className="mainContainerForCard__imageBlock_viewComponent">
                        <img src="img-static/b2ae5d6885.jpg" alt=""/>
                    </div>
                    <div className="mainContainerForCard__imageBlock_addOpportunity">
                        <div className="mainContainerForCard__imageBlock_addOpportunity_item">
                            <i className="fa fa-clock-o" aria-hidden="true"></i>
                            <span>Обмен и возврат в теч. 14 дней</span>
                        </div>
                        <div className="mainContainerForCard__imageBlock_addOpportunity_item">
                            <i className="fa fa-star-o" aria-hidden="true"></i>
                            <span>Гарантия качества на товары</span>
                        </div>
                        <div className="mainContainerForCard__imageBlock_addOpportunity_item">
                            <i className="fa fa-check-square-o" aria-hidden="true"></i>
                            <span>Проверка каждого товаров</span>
                        </div>
                        <div className="mainContainerForCard__imageBlock_addOpportunity_item">
                            <i className="fa fa-bus" aria-hidden="true"></i>
                            <span>Удобная и быстрая доставка</span>
                        </div>
                        <div className="mainContainerForCard__imageBlock_addOpportunity_item">
                            <i className="fa fa-money" aria-hidden="true"></i>
                            <span>Надежная система оплаты</span>
                        </div>
                    </div>
                </div>
                <div className="mainContainerForCard__mainInfoBlock">
                    <div className="mainContainerForCard__mainInfoBlock_oneBlockContainer">
                             <span className="mainContainerForCard__mainInfoBlock_codeItem">
                                <i className="fa fa-eye" aria-hidden="true"></i>
                                <span className="mainContainerForCard__mainInfoBlock_codeItem_count"> 123</span>
                        </span>
                        <span className="mainContainerForCard__mainInfoBlock_show">
                                <span className="mainContainerForCard__mainInfoBlock_show_value">код товара: <span>123</span></span>
                        </span>
                    </div>
                    <h1 className="mainContainerForCard__mainInfoBlock_twoBlockTitle">
                        Reebok, model test-1000 21 12321 312 3123 123 123 12321
                    </h1>
                    <div className="mainContainerForCard__mainInfoBlock_threeBlockPartners">
                        <span className="mainContainerForCard__mainInfoBlock_threeBlockPartners_title">Наши партнеры - </span>
                        <img className="partnersInCard" src="img-static/privatbank.png" alt=""/>
                            <img className="partnersInCard" src="img-static/navaposhta.png" alt=""/>
                                <img className="partnersInCard" src="img-static/kievstar.png" alt=""/>
                                    <img className="partnersInCard" src="img-static/life.png" alt=""/>
                    </div>
                    <div className="mainContainerForCard__mainInfoBlock_fourBlockPrice">
                        <div className="mainContainerForCard__mainInfoBlock_fourBlockPrice_price">
                            <span className="mainContainerForCard__mainInfoBlock_fourBlockPrice_price_count">5345</span>
                            <span className="mainContainerForCard__mainInfoBlock_fourBlockPrice_price_money">грн</span>
                        </div>
                        <div className="mainContainerForCard__mainInfoBlock_fourBlockPrice_quicly">КУПИТЬ СРАЗУ</div>
                        <div className="mainContainerForCard__mainInfoBlock_fourBlockPrice_cart">В КОРЗИНУ</div>
                    </div>
                    <div className="mainContainerForCard__mainInfoBlock_fifeBlockAlreadyBuy">
                            <span className="mainContainerForCard__mainInfoBlock_fifeBlockAlreadyBuy_img">
                                <i className="fa fa-cart-arrow-down" aria-hidden="true"></i>
                                <span className="mainContainerForCard__mainInfoBlock_fifeBlockAlreadyBuy_count">&nbsp;&nbsp;уже купило <span>123</span> человека</span>
                            </span>
                        <span className="mainContainerForCard__mainInfoBlock_fifeBlockAlreadyBuy_haveGot">
                                <i className="fa fa-check-circle greenInCard" aria-hidden="true"></i>
                                <span className="mainContainerForCard__mainInfoBlock_fifeBlockAlreadyBuy_haveGot__text">&nbsp;&nbsp;Есть в наличии</span>
                            </span>
                        <span className="mainContainerForCard__mainInfoBlock_fifeBlockAlreadyBuy_haveGot">
                                <i className="fa fa-times-circle-o redInCard" aria-hidden="true"></i>
                                <span className="mainContainerForCard__mainInfoBlock_fifeBlockAlreadyBuy_haveGot__text">&nbsp;&nbsp;Нет в наличии</span>
                            </span>
                    </div>
                    <div className="mainContainerForCard__mainInfoBlock_sixBlockDescriptionShort">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores deleniti dolorem
                        explicabo ipsa laudantium quae sed sequi sunt temporibus unde. Accusamus facilis laboriosam
                        sequi. Dolor eius fuga illo vero voluptates.
                    </div>
                    <div className="clearfix"></div>
                </div>


            </div>
        )

    }
}

export default MainContainerForCard;