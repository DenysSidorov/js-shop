import React from "react";
import style from './mainBodyCard.less';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {pushToCart} from '../../../../reducers/cart';
import {Link} from "react-router-dom";
import OneClickModal from "../modals/one-click-modal/index";
class CardMainPage extends React.Component {

  state = {
    isShowOneClickModal : false
  }

  handleShowOneClick = (state) => {
    if (state === undefined) {
      this.setState({
        isShowOneClickModal: !this.state.isShowOneClickModal
      })
    } else {
      this.setState({
        isShowOneClickModal: state
      })
    }
  }

  render() {
    let {card} = this.props;
    return (
      <div className="bodyCardItems__oneCardItem">
        <Link to={`/card/${card._id}`}>
          <div className="oneCardItem__headCard">
            <div className="oneCardItem__headCard__priceCard">
              <span>{card.price}</span><span></span><span>грн.</span>
            </div>
            <div className="oneCardItem__headCard__nameBrand">
              {card.name} {card.model}
            </div>
            <div className="oneCardItem__headCard__wrap-things">
              {/*<div className="oneCardItem__headCard__otherThings">*/}
              {/*<i className="fa fa-heart"></i>*/}
              {/*<span className="oneCardItem__headCard__otherThings_like"> {card.likes}</span>*/}
              {/*</div>*/}
              <div className="oneCardItem__headCard__view">
                <i className="fa fa-eye" aria-hidden="true"></i>
                <span className="oneCardItem__headCard__view_items"> {card.views}</span>
              </div>
            </div>
          </div>

          <div className="oneCardItem__imageBody">
            <img src={`/img-static/${card.photo[0]}`} alt=""/>
            <img src={`/img-static/${card.photo[1]}`} alt="" className="img-top"/>
          </div>
        </Link>


        <div className="oneCardItem__bottomCard">
          <Link to={`/card/${card._id}`} className="oneCardItem__bottomCard__shortText">
            <span className="oneCardItem__bottomCard__shortText_dots">{card['desc-short']}</span>
          </Link>
          {card.isExists ? <div className="oneCardItem__bottomCard__status">В наличии</div>
            : <div className="oneCardItem__bottomCard__status red">Нет в наличии</div>}
          <div className="oneCardItem__bottomCard__buy">
            <span onClick={() => this.props.addItem(card)}>В корзину</span>
          </div>
          <div className="oneCardItem__bottomCard__buy_fast">
            <span onClick={this.handleShowOneClick}>Заказ в 1 клик</span>
          </div>
        </div>

        {card.sail ?
          <div className="oneCardItem__bottomCard_sale"><span>-{card.sail}%</span></div> : null}
        {card.isNewGood ?
          <div className="oneCardItem__bottomCard_new">NEW<span></span></div> : null}

        {this.state.isShowOneClickModal && <OneClickModal
              close={this.handleShowOneClick}
              goods={[card]}
          />}
      </div>
    )
  }
}


const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators({
    addItem: (item) => pushToCart(item)
  }, dispatch)
}

export default connect(
  null, mapDispatchToProps
)(CardMainPage);


function randomInteger(min, max) {
  var rand = min + Math.random() * (max + 1 - min);
  rand = Math.floor(rand);
  return rand;
}
