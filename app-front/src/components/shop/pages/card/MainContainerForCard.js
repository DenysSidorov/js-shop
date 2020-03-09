import React, {Fragment} from "react";
import {withRouter} from 'react-router-dom';
import Gallery from "../../modules/image-gallery";
// import Gallery2 from "../../modules/gallery2";
import "./mainContainerForCard.less";
import Confirm from "../../WrapperApp/ConfirmBlock";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {pushToCart} from "../../../../reducers/cart";
import {changeConfirm} from "../../../../reducers/confirmInCard";
import Exchange from './confirms/Exchange';
import Garanty from './confirms/Garanty';
import Verify from './confirms/Verify';
import Payment from './confirms/Payment';
import Delivery from './confirms/Delivery';
import Price from "../landing/Price";
import {Link} from "react-router-dom";
class MainContainerForCard extends React.PureComponent {
    constructor(props) {
        super(props);

        this.showConfirm = this.showConfirm.bind(this);
        this.showConfirmWithKind = this.showConfirmWithKind.bind(this);
        //  this.closeConfirms = this.closeConfirms.bind(this);
      this.state = {
        card: this.props.card
      }
    }

  componentWillReceiveProps(nextProps) {
    if (nextProps.card !== this.props.card) {
      this.setState({
        card: nextProps.card
      })
    }
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
    showConfirmWithKind(){
        /*{this.props.confirmKind == 'verif' ? 'verify' : 'cashback'}*/
        switch(this.props.confirmKind){
            case('cashback'): return <Exchange/>; break;
            case('garanty'): return <Garanty/>; break;
            case('verif'): return <Verify/>; break; //
            case('deliv'): return <Delivery/>; break;
            case('payment'): return <Payment/>; break;
            default : return <Garanty/>;
        }
    }
    render() {
        console.log('rerender');
        var card = this.state.card[0];
        console.log(card, 'card');
        const images = [];
        card && card.photo.forEach(el=> images.push({
            original: `/img-static/${el}`,
            thumbnail:`/img-static/${el}`
        }));
        return (
          <Fragment>
            <div className="mainContainerForCard">
              <div className="mainContainerForCard__imageBlock">
                <div className="mainContainerForCard__imageBlock_viewComponent">
                  {/*<Gallery2/>*/}
                  <div style={{width: '95%', height: '500px'}}>
                    <Gallery
                      items={images}
                      slideOnThumbnailHover={true}
                      autoPlay={true}
                    />
                  </div>
                </div>
                <div className="mainContainerForCard__imageBlock_addOpportunity">
                  {/*<div className="mainContainerForCard__imageBlock_addOpportunity_read">*/}
                  {/*    <img src="/img-static/red-arrow.png" alt=""/>*/}
                  {/*</div>*/}
                  {/*<div className="mainContainerForCard__imageBlock_addOpportunity_item"*/}
                  {/*     onClick={(e)=>{this.showConfirm('cashback',e)}}>*/}
                  {/*    <i className="fa fa-clock-o addOpportunity_item_i" aria-hidden="true"></i>*/}
                  {/*    <span className="addOpportunity_item_span">Обмен и возврат в теч. 14 дней</span>*/}

                  {/*</div>*/}
                  <div className="mainContainerForCard__imageBlock_addOpportunity_item"
                       onClick={(e)=>{this.showConfirm('garanty',e)}}>
                    <i className="fa fa-star-o addOpportunity_item_i" aria-hidden="true"></i>
                    <span className="addOpportunity_item_span">Гарантия качества на товары</span>

                  </div>
                  {/*<div className="mainContainerForCard__imageBlock_addOpportunity_item"*/}
                  {/*     onClick={(e)=>{this.showConfirm('verif',e)}}>*/}
                  {/*    <i className="fa fa-check-square-o addOpportunity_item_i" aria-hidden="true"></i>*/}
                  {/*    <span className="addOpportunity_item_span">Проверка каждого товаров</span>*/}
                  {/*</div>*/}
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
                <Link to='/shop' className="mainContainerForCard_underLink">
                  <span>Вернуться в магазин</span>
                </Link>
                <div className="mainContainerForCard__mainInfoBlock_oneBlockContainer">
                             <span className="mainContainerForCard__mainInfoBlock_codeItem">
                                <i className="fa fa-eye" aria-hidden="true"></i>
                                <span className="mainContainerForCard__mainInfoBlock_codeItem_count"> {card.views}</span>
                        </span>
                  <span className="mainContainerForCard__mainInfoBlock_show">
                                <span className="mainContainerForCard__mainInfoBlock_show_value">код товара: <span>{card.code}</span></span>
                        </span>
                </div>
                <h1 className="mainContainerForCard__mainInfoBlock_twoBlockTitle">{`Картина на досках, Украина, категория - ${card.category}. ${card.name ? card.name + ' "' : '"'}${card.model}"`}</h1>
                <div className="mainContainerForCard__mainInfoBlock_threeBlockPartners">
                  <span className="mainContainerForCard__mainInfoBlock_threeBlockPartners_title">Наши партнеры - </span>
                  <img className="partnersInCard" src="/img-static/privatbank.png" alt=""/>
                  <img className="partnersInCard" src="/img-static/navaposhta.png" alt=""/>
                  <img className="partnersInCard" src="/img-static/kievstar.png" alt=""/>
                  <img className="partnersInCard" src="/img-static/life.png" alt=""/>
                </div>
                <div className="mainContainerForCard__mainInfoBlock_fourBlockPrice">
                  <div className="mainContainerForCard__mainInfoBlock_fourBlockPrice_price">
                    <span className="mainContainerForCard__mainInfoBlock_fourBlockPrice_price_count">{'от '}{card.price}</span>
                    <span className="mainContainerForCard__mainInfoBlock_fourBlockPrice_price_money">грн</span>
                  </div>
                  {/*<div className="mainContainerForCard__mainInfoBlock_fourBlockPrice_quicly">КУПИТЬ СРАЗУ</div>*/}
                  <div onClick={() => this.props.addItem(card)} className="mainContainerForCard__mainInfoBlock_fourBlockPrice_cart">В КОРЗИНУ</div>
                </div>
                <div className="mainContainerForCard__mainInfoBlock_fifeBlockAlreadyBuy">
                  {/* <span className="mainContainerForCard__mainInfoBlock_fifeBlockAlreadyBuy_img">*/}
                  {/*    <i className="fa fa-cart-arrow-down" aria-hidden="true"></i>*/}
                  {/*    <span className="mainContainerForCard__mainInfoBlock_fifeBlockAlreadyBuy_count">&nbsp;&nbsp;уже купило <span>14</span> человека</span>*/}
                  {/* </span>*/}
                  {card.sail ?<span className="mainContainerForCard__mainInfoBlock_fifeBlockAlreadyBuy_img">
                               <i className="fa fa-pie-chart shop_blueIco_global" aria-hidden="true"></i>
                                <span className="mainContainerForCard__mainInfoBlock_fifeBlockAlreadyBuy_count">&nbsp;&nbsp;скидка <span>{card.sail}</span> %</span>
                            </span> : null}
                  {/*{true || card.isExists*/}
                  {/*    ? <span className="mainContainerForCard__mainInfoBlock_fifeBlockAlreadyBuy_haveGot">*/}
                  {/*        <i className="fa fa-check-circle greenInCard" aria-hidden="true"></i>*/}
                  {/*        <span className="mainContainerForCard__mainInfoBlock_fifeBlockAlreadyBuy_haveGot__text">&nbsp;&nbsp;Есть в наличии</span>*/}
                  {/*    </span>*/}
                  {/*    :  <span className="mainContainerForCard__mainInfoBlock_fifeBlockAlreadyBuy_haveGot">*/}
                  {/*        <i className="fa fa-times-circle-o redInCard" aria-hidden="true"></i>*/}
                  {/*        <span className="mainContainerForCard__mainInfoBlock_fifeBlockAlreadyBuy_haveGot__text">&nbsp;&nbsp;Нет в наличии</span>*/}
                  {/*    </span>*/}
                  {/*}*/}

                  <span className="mainContainerForCard__mainInfoBlock_fifeBlockAlreadyBuy_haveGot">
                                <i className="fa fa-check-circle greenInCard" aria-hidden="true"></i>
                                <span className="mainContainerForCard__mainInfoBlock_fifeBlockAlreadyBuy_haveGot__text">&nbsp;&nbsp;Изготовление 2-3 дня</span>
                            </span>
                  <span className="mainContainerForCard__mainInfoBlock_fifeBlockAlreadyBuy_haveGot">
                                <i className="fa fa-check-circle greenInCard" aria-hidden="true"></i>
                                <span className="mainContainerForCard__mainInfoBlock_fifeBlockAlreadyBuy_haveGot__text">&nbsp;&nbsp;Экологические материалы</span>
                            </span>
                  <span className="mainContainerForCard__mainInfoBlock_fifeBlockAlreadyBuy_haveGot">
                                <i className="fa fa-check-circle greenInCard" aria-hidden="true"></i>
                                <span className="mainContainerForCard__mainInfoBlock_fifeBlockAlreadyBuy_haveGot__text">&nbsp;&nbsp;Свое производство</span>
                            </span>


                </div>
                <div className="mainContainerForCard__mainInfoBlock_sixBlockDescriptionShort">
                  {/*{card['desc-short']}*/}
                  Вручную изготовленная картина на деревянных досках, наполнит интерьер природой и подчеркнет ваш вкус. К каждой картине, сделанной в Украине мы подходим с любовью, что бы ваш подарок себе или близким гармонично вписался в стиль который вы создаете.
                </div>

                <div className="clearfix"></div>
              </div>
              <Price/>

              {this.props.confirmKind.length ? <Confirm
                okHandler={ this.closeConfirms.bind(this)}
                cancelHandler={this.closeConfirms.bind(this)}
                unmountConfirm={this.closeConfirms.bind(this)}
              >
                {this.showConfirmWithKind()}
              </Confirm>: null}
            </div>
          </Fragment>
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

export default withRouter(connect(
    mapStateToProps, mapDispatchToProps
)(MainContainerForCard));

function randomInteger(min, max) {
    var rand = min + Math.random() * (max + 1 - min);
    rand = Math.floor(rand);
    return rand;
}
