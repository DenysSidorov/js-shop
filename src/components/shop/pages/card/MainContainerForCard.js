import React from "react";
import styles from './mainContainerForCard.less'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {pushToCart} from '../../../../reducers/cart';
class MainContainerForCard extends React.Component {

    render() {
        var card = this.props.card[0];
        return (
            <div className="mainContainerForCard">
                <div className="mainContainerForCard__imageBlock">
                    <div className="mainContainerForCard__imageBlock_viewComponent">
                        <img src={`/img-static/${card.photo[0]}`} alt=""/>
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
                                <span className="mainContainerForCard__mainInfoBlock_codeItem_count"> {card.views}</span>
                        </span>
                        <span className="mainContainerForCard__mainInfoBlock_show">
                                <span className="mainContainerForCard__mainInfoBlock_show_value">код товара: <span>{card.code}</span></span>
                        </span>
                    </div>
                    <h1 className="mainContainerForCard__mainInfoBlock_twoBlockTitle">{card.name} {card.model}</h1>
                    <div className="mainContainerForCard__mainInfoBlock_threeBlockPartners">
                        <span className="mainContainerForCard__mainInfoBlock_threeBlockPartners_title">Наши партнеры - </span>
                        <img className="partnersInCard" src="/img-static/privatbank.png" alt=""/>
                            <img className="partnersInCard" src="/img-static/navaposhta.png" alt=""/>
                                <img className="partnersInCard" src="/img-static/kievstar.png" alt=""/>
                                    <img className="partnersInCard" src="/img-static/life.png" alt=""/>
                    </div>
                    <div className="mainContainerForCard__mainInfoBlock_fourBlockPrice">
                        <div className="mainContainerForCard__mainInfoBlock_fourBlockPrice_price">
                            <span className="mainContainerForCard__mainInfoBlock_fourBlockPrice_price_count">{card.price}</span>
                            <span className="mainContainerForCard__mainInfoBlock_fourBlockPrice_price_money">грн</span>
                        </div>
                        {/*<div className="mainContainerForCard__mainInfoBlock_fourBlockPrice_quicly">КУПИТЬ СРАЗУ</div>*/}
                        <div onClick={() => this.props.addItem(card)} className="mainContainerForCard__mainInfoBlock_fourBlockPrice_cart">В КОРЗИНУ</div>
                    </div>
                    <div className="mainContainerForCard__mainInfoBlock_fifeBlockAlreadyBuy">
                            <span className="mainContainerForCard__mainInfoBlock_fifeBlockAlreadyBuy_img">
                                <i className="fa fa-cart-arrow-down" aria-hidden="true"></i>
                                <span className="mainContainerForCard__mainInfoBlock_fifeBlockAlreadyBuy_count">&nbsp;&nbsp;уже купило <span>123</span> человека</span>
                            </span>
                        {card.isExists
                            ? <span className="mainContainerForCard__mainInfoBlock_fifeBlockAlreadyBuy_haveGot">
                                <i className="fa fa-check-circle greenInCard" aria-hidden="true"></i>
                                <span className="mainContainerForCard__mainInfoBlock_fifeBlockAlreadyBuy_haveGot__text">&nbsp;&nbsp;Есть в наличии</span>
                            </span>
                            :  <span className="mainContainerForCard__mainInfoBlock_fifeBlockAlreadyBuy_haveGot">
                                <i className="fa fa-times-circle-o redInCard" aria-hidden="true"></i>
                                <span className="mainContainerForCard__mainInfoBlock_fifeBlockAlreadyBuy_haveGot__text">&nbsp;&nbsp;Нет в наличии</span>
                            </span>
                        }


                    </div>
                    <div className="mainContainerForCard__mainInfoBlock_sixBlockDescriptionShort">{card['desc-short']}</div>
                    <div className="clearfix"></div>
                </div>


            </div>
        )

    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return bindActionCreators({
        addItem: (item)=> pushToCart(item)
    },dispatch)
}

export default connect(
    null, mapDispatchToProps
)(MainContainerForCard);

function randomInteger(min, max) {
    var rand = min + Math.random() * (max + 1 - min);
    rand = Math.floor(rand);
    return rand;
}