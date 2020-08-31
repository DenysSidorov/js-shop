import React, {useCallback, useState} from 'react';
// import {withRouter, Link} from 'react-router-dom';
import {Link} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import './mainBodyCard.less';
import {pushToCart} from '../../../redux/reducers/cart-reducer';

// import OneClickModal from '../modals/one-click-modal/index';
import {checkTextLength} from '../../../helpers/libs/utils';

interface ICardMainPage {
  card: any;
  addItem: Function;
}

const CardMainPage = ({card, addItem}: ICardMainPage) => {
  const [isShowOneClickModal, setIsShowOneClickModal] = useState(false);

  const handleShowOneClick = useCallback(
    (state: any) => {
      if (state === undefined) {
        setIsShowOneClickModal(!isShowOneClickModal);
      } else {
        setIsShowOneClickModal(state);
      }
    },
    [isShowOneClickModal]
  );

  return (
    <div className='bodyCardItems__oneCardItem'>
      <Link to={`/card/${card._id}`}>
        <div className='oneCardItem__headCard'>
          <div className='oneCardItem__headCard__priceCard'>
            <span>
              {'от '}
              {card.price}
            </span>
            <span />
            <span>грн.</span>
          </div>
          <div className='oneCardItem__headCard__nameBrand'>
            Картина на досках {'"'}
            {checkTextLength(`${card.name}${card.model}`, 29)}
            {'"'}
          </div>
          <div className='oneCardItem__headCard__wrap-things'>
            {/* <div className="oneCardItem__headCard__otherThings"> */}
            {/* <i className="fa fa-heart"></i> */}
            {/* <span className="oneCardItem__headCard__otherThings_like"> {card.likes}</span> */}
            {/* </div> */}
            <div className='oneCardItem__headCard__view'>
              <i className='fa fa-eye' aria-hidden='true' />
              <span className='oneCardItem__headCard__view_items'> {card.views}</span>
            </div>
          </div>
        </div>

        <div className='oneCardItem__imageBody'>
          <img src={`/img-static/${card.photo[0]}`} alt='' />
          <img src={`/img-static/${card.photo[1]}`} alt='' className='img-top' />
        </div>
      </Link>

      <div className='oneCardItem__bottomCard'>
        <Link to={`/card/${card._id}`} className='oneCardItem__bottomCard__shortText'>
          <span className='oneCardItem__bottomCard__shortText_dots'>{card['desc-short']}</span>
        </Link>
        {/* {card.isExists ? <div className="oneCardItem__bottomCard__status">В наличии</div> */}
        {/*: <div className="oneCardItem__bottomCard__status red">Нет в наличии</div>} */}
        <div className='oneCardItem__bottomCard__buy'>
          <span onClick={() => addItem(card)}>В корзину</span>
        </div>
        <div className='oneCardItem__bottomCard__buy_fast'>
          <span onClick={handleShowOneClick}>Заказ в 1 клик</span>
        </div>
      </div>

      {card.sail ? (
        <div className='oneCardItem__bottomCard_sale'>
          <span>-{card.sail}%</span>
        </div>
      ) : null}
      {card.isNewGood ? (
        <div className='oneCardItem__bottomCard_new'>
          NEW
          <span />
        </div>
      ) : null}

      {/* {isShowOneClickModal && <OneClickModal close={handleShowOneClick} goods={[card]} willDeleteGoods={false} />} */}
    </div>
  );
};

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators(
    {
      addItem: (item) => pushToCart(item)
    },
    dispatch
  );
};
// export default withRouter(connect(null, mapDispatchToProps)(CardMainPage));
export default connect(null, mapDispatchToProps)(CardMainPage);
