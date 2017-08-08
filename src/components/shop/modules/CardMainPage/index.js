import React from "react";
import style from './mainBodyCard.less';
class CardMainPage extends React.Component {

    render() {
        return (
            <div className="bodyCardItems__oneCardItem">

                <div className="oneCardItem__headCard">
                    <div className="oneCardItem__headCard__priceCard">
                        <span>879</span><span></span>&nbsp;<span>$</span>
                    </div>
                    <div className="oneCardItem__headCard__nameBrand">Reebok, model test-1000 21 12321
                        312 3123
                        123 123
                        12321
                    </div>
                    <div className="oneCardItem__headCard__wrap-things">
                        <div className="oneCardItem__headCard__otherThings">
                            <i className="fa fa-heart"></i>
                            <span className="oneCardItem__headCard__otherThings_like"> 123</span>
                        </div>
                        <div className="oneCardItem__headCard__view">
                            <i className="fa fa-eye" aria-hidden="true"></i>
                            <span className="oneCardItem__headCard__view_items"> 123</span>
                        </div>
                    </div>
                </div>

                <div className="oneCardItem__imageBody">
                    <img src="img-static/00017.jpg" alt=""/>
                </div>

                <div className="oneCardItem__bottomCard">
                    <div className="oneCardItem__bottomCard__shortText">
                        <span className="oneCardItem__bottomCard__shortText_dots">Короткое описание товара, очень крутое описание овара, купи меня, я очень вкусный товар, бесплатно почти, с большой скидкой, давай, давайКороткое описание товара, очень крутое описание овара, купи меня, я очень вкусный товар, бесплатно почти, с большой скидкой, давай, давайКороткое описание товара, очень крутое описание овара, купи меня, я очень вкусный товар, бесплатно почти, с большой скидкой, давай, давай</span>
                    </div>
                    <div className="oneCardItem__bottomCard__status">В наличии</div>
                    <div className="oneCardItem__bottomCard__buy"><span>В КОРЗИНУ</span></div>
                </div>

                <div className="oneCardItem__bottomCard_sale"><span>-15%</span></div>
                <div className="oneCardItem__bottomCard_new">NEW<span></span></div>
            </div>
        )
    }
}

export default CardMainPage;