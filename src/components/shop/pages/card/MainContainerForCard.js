import React from "react";
import Gallery from "../../modules/image-gallery";
import "./mainContainerForCard.less";
import Confirm from "../../WrapperApp/ConfirmBlock";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {pushToCart} from "../../../../reducers/cart";
import {changeConfirm} from "../../../../reducers/confirmInCard";
class MainContainerForCard extends React.Component {
    constructor(props) {
        super(props);

        this.showConfirm = this.showConfirm.bind(this);
        //  this.closeConfirms = this.closeConfirms.bind(this);
    }

    closeConfirms () {
        console.log([''], 'empty');
        this.props.changeKind('');
        console.log(this.props.confirmKind , 'close reducer');
        // this.setState({
        //     kindConfirm: '',
        //     jopa: 111
        // }, ()=>{console.log(this.state.kindConfirm , 'after222');
        //     this.forceUpdate();
        // })
    }
    showConfirm (kind, e){
        console.log(kind, 'kind');
        console.log(e, 'e');
        e.stopPropagation();
        console.log('start show');
        this.props.changeKind(kind);
        // this.setState({
        //     kindConfirm: kind
        // })
        console.log(this.props.confirmKind, 'show reducer');
    }
    render() {
        console.log('rerender');
        var card = this.props.card[0];
        const images = [];
        card.photo.forEach(el=> images.push({
            original: `/img-static/${el}`,
            thumbnail:`/img-static/${el}`
        }));
        return (
            <div className="mainContainerForCard">
                <div className="mainContainerForCard__imageBlock">
                    <div className="mainContainerForCard__imageBlock_viewComponent">
                        <div style={{width: '95%', height: '500px'}}>
                            <Gallery
                                items={images}
                                slideOnThumbnailHover={true}
                                autoPlay={true}
                            />
                        </div>
                    </div>
                    <div className="mainContainerForCard__imageBlock_addOpportunity">
                        <div className="mainContainerForCard__imageBlock_addOpportunity_item"
                             onClick={(e)=>{this.showConfirm('cashback',e)}}>
                            <i className="fa fa-clock-o addOpportunity_item_i" aria-hidden="true"></i>
                            <span className="addOpportunity_item_span">Обмен и возврат в теч. 14 дней</span>

                        </div>
                        <div className="mainContainerForCard__imageBlock_addOpportunity_item"
                             onClick={(e)=>{this.showConfirm('garanty',e)}}>
                            <i className="fa fa-star-o addOpportunity_item_i" aria-hidden="true"></i>
                            <span className="addOpportunity_item_span">Гарантия качества на товары</span>

                        </div>
                        <div className="mainContainerForCard__imageBlock_addOpportunity_item"
                             onClick={(e)=>{this.showConfirm('verif',e)}}>
                            <i className="fa fa-check-square-o addOpportunity_item_i" aria-hidden="true"></i>
                            <span className="addOpportunity_item_span">Проверка каждого товаров</span>
                        </div>
                        <div className="mainContainerForCard__imageBlock_addOpportunity_item"
                             onClick={(e)=>{this.showConfirm('deliv',e)}}>
                            <i className="fa fa-bus addOpportunity_item_i" aria-hidden="true"></i>
                            <span className="addOpportunity_item_span">Удобная и быстрая доставка</span>
                        </div>
                        <div className="mainContainerForCard__imageBlock_addOpportunity_item"
                             onClick={(e)=>{this.showConfirm('payment',e)}}>
                            <i className="fa fa-money addOpportunity_item_i" aria-hidden="true"></i>
                            <span className="addOpportunity_item_span">Надежная система оплаты</span>
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

                {this.props.confirmKind.length ? <Confirm
                    okHandler={ this.closeConfirms.bind(this)}
                    cancelHandler={this.closeConfirms.bind(this)}
                    unmountConfirm={this.closeConfirms.bind(this)}
                >
                    {this.props.confirmKind == 'verif' ? 'verify' : 'cashback'}
                </Confirm>: null}
            </div>
        )

    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        confirmKind: state.confirmsCard
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return bindActionCreators({
        addItem: (item)=> pushToCart(item),
        changeKind : (kind)=> changeConfirm(kind),
    },dispatch)
}

export default connect(
    mapStateToProps, mapDispatchToProps
)(MainContainerForCard);

function randomInteger(min, max) {
    var rand = min + Math.random() * (max + 1 - min);
    rand = Math.floor(rand);
    return rand;
}
