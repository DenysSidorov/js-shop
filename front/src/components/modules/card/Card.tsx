import React, {useCallback, useState} from 'react';
import {Link} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {ICartReducerItem} from '../../../redux/reducers/cart-reducer/cartReducer';
import {pushToCart} from '../../../redux/reducers/cart-reducer/actions';
import OneClickModal from '../../parts/modals/one-click-modal/OneClickModal';
import {checkTextLength} from '../../../helpers/libs/utils';
import './index.less';

interface ICardMainPage {
  card: ICartReducerItem;
  width?: string;
}

const CardMainPage = ({card, width}: ICardMainPage) => {
  const [isShowOneClickModal, setIsShowOneClickModal] = useState(false);
  const dispatch = useDispatch();
  const addItem = (item: ICartReducerItem) => dispatch(pushToCart(item));

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
    <div className='bodyCardItems__oneCardItem' style={{width: width || ''}}>
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

      {isShowOneClickModal && <OneClickModal close={handleShowOneClick} goods={[card]} willDeleteGoods={false} />}
    </div>
  );
};

export default CardMainPage;
