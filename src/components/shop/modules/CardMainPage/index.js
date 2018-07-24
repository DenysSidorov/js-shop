import React from "react";
import style from './mainBodyCard.less';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {pushToCart} from '../../../../reducers/cart';
import {Link} from "react-router-dom";
class CardMainPage extends React.Component {

    render() {
    let {card} = this.props;

        return (
            <div className="bodyCardItems__oneCardItem">
                <div className="oneCardItem__headCard">
                    <div className="oneCardItem__headCard__priceCard">
                        <span>{card.price}</span><span></span><span>грн.</span>
                    </div>
                    <Link to={`/card/${card._id}`} className="oneCardItem__headCard__nameBrand">{card.name} {card.model}</Link>
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

                <div className="oneCardItem__bottomCard">
                    <Link to={`/card/${card._id}`} className="oneCardItem__bottomCard__shortText">
                        <span className="oneCardItem__bottomCard__shortText_dots">{card['desc-short']}</span>
                    </Link>
                    {card.isExists ? <div className="oneCardItem__bottomCard__status">В наличии</div>
                        : <div className="oneCardItem__bottomCard__status red">Нет в наличии</div>}
                    <div className="oneCardItem__bottomCard__buy">
                        <span onClick={() => this.props.addItem(card)}>В КОРЗИНУ</span>
                    </div>
                </div>

                {card.sail ? <div className="oneCardItem__bottomCard_sale"><span>-{card.sail}%</span></div>: null}
                {card.isNewGood ? <div className="oneCardItem__bottomCard_new">NEW<span></span></div> : null}
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
)(CardMainPage);


function randomInteger(min, max) {
    var rand = min + Math.random() * (max + 1 - min);
    rand = Math.floor(rand);
    return rand;
}
