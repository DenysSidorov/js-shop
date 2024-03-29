import React, {useCallback, useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import Gallery from '../../modules/image-gallery/ImageGallery';
import Confirm from '../../modules/confirm-block-in-card/ConfirmBlock';
import {ICartReducerItem} from '../../../redux/reducers/cart-reducer/cartReducer';
import {pushToCart} from '../../../redux/reducers/cart-reducer/actions';
import {changeConfirm} from '../../../redux/reducers/confirm-in-card';
import Exchange from './confirms/Exchange';
import Guarantee from './confirms/Guarantee';
import Verify from './confirms/Verify';
import Payment from './confirms/Payment';
import Delivery from './confirms/Delivery';
import Price from '../landing/Price';
import './mainContainerForCard.less';
import {selectConfirmReducer} from '../../../redux/reducers/confirm-in-card/selectors';

interface IMainContainerForCard {
  card: ICartReducerItem;
}
// todo rewrite useSelector with selector
const MainContainerForCard = (props: IMainContainerForCard) => {
  const confirmKind = useSelector(selectConfirmReducer);
  const dispatch = useDispatch();

  const addItem = useCallback(
    (item: ICartReducerItem) => {
      dispatch(pushToCart(item));
    },
    [dispatch],
  );

  const changeKind = useCallback(
    (kind: string) => {
      dispatch(changeConfirm(kind));
    },
    [dispatch],
  );

  const [cardItem, setCardItem] = useState(props.card);

  useEffect(() => {
    if (props.card._id !== cardItem._id) {
      setCardItem(props.card);
    }
  }, [props.card, cardItem._id]);

  const closeConfirms = useCallback(() => {
    changeKind('');
  }, [changeKind]);

  const showConfirm = useCallback(
    (kind: string, e: React.MouseEvent) => {
      e.stopPropagation();
      changeKind(kind);
    },
    [changeKind],
  );

  const showConfirmWithKind = useCallback(() => {
    switch (confirmKind) {
      case 'cashback':
        return <Exchange />;
      case 'garanty':
        return <Guarantee />;
      case 'verif':
        return <Verify />;
      case 'deliv':
        return <Delivery />;
      case 'payment':
        return <Payment />;
      default:
        return <Guarantee />;
    }
  }, [confirmKind]);

  const card = cardItem;
  const images: any[] = [];
  if (card) {
    card.photo.forEach((el: any) =>
      images.push({
        original: `/img-static/${el}`,
        thumbnail: `/img-static/${el}`,
      }),
    );
  }

  return (
    <>
      <div className='mainContainerForCard'>
        <div className='mainContainerForCard__imageBlock'>
          <div className='mainContainerForCard__imageBlock_viewComponent'>
            <div style={{width: '95%', height: '500px'}}>
              <Gallery items={images} slideOnThumbnailHover autoPlay />
            </div>
          </div>
          <div className='mainContainerForCard__imageBlock_addOpportunity'>
            {/* <div className="mainContainerForCard__imageBlock_addOpportunity_read"> */}
            {/*    <img src="/img-static/red-arrow.png" alt=""/> */}
            {/* </div> */}
            {/* <div className="mainContainerForCard__imageBlock_addOpportunity_item" */}
            {/*     onClick={(e)=>{this.showConfirm('cashback',e)}}> */}
            {/*    <i className="fa fa-clock-o addOpportunity_item_i" aria-hidden="true"></i> */}
            {/*    <span className="addOpportunity_item_span">Обмен и возврат в теч. 14 дней</span> */}

            {/* </div> */}
            <div
              className='mainContainerForCard__imageBlock_addOpportunity_item'
              onClick={(e) => {
                showConfirm('garanty', e);
              }}
            >
              <i className='fa fa-star-o addOpportunity_item_i' aria-hidden='true' />
              <span className='addOpportunity_item_span'>Гарантия качества на товары</span>
            </div>
            {/* <div className="mainContainerForCard__imageBlock_addOpportunity_item" */}
            {/*     onClick={(e)=>{this.showConfirm('verif',e)}}> */}
            {/*    <i className="fa fa-check-square-o addOpportunity_item_i" aria-hidden="true"></i> */}
            {/*    <span className="addOpportunity_item_span">Проверка каждого товаров</span> */}
            {/* </div> */}
            <div
              className='mainContainerForCard__imageBlock_addOpportunity_item'
              onClick={(e) => {
                showConfirm('deliv', e);
              }}
            >
              <i className='fa fa-bus addOpportunity_item_i' aria-hidden='true' />
              <span className='addOpportunity_item_span'>Удобная и быстрая доставка</span>
            </div>
            <div
              className='mainContainerForCard__imageBlock_addOpportunity_item'
              onClick={(e) => {
                showConfirm('payment', e);
              }}
            >
              <i className='fa fa-money addOpportunity_item_i' aria-hidden='true' />
              <span className='addOpportunity_item_span'>Надежная система оплаты</span>
            </div>
          </div>
        </div>
        <div className='mainContainerForCard__mainInfoBlock'>
          <Link to='/shop' className='mainContainerForCard_underLink'>
            <span>Вернуться в магазин</span>
          </Link>
          <div className='mainContainerForCard__mainInfoBlock_oneBlockContainer'>
            <span className='mainContainerForCard__mainInfoBlock_codeItem'>
              <i className='fa fa-eye' aria-hidden='true' />
              <span className='mainContainerForCard__mainInfoBlock_codeItem_count'> {card.views}</span>
            </span>
            <span className='mainContainerForCard__mainInfoBlock_show'>
              <span className='mainContainerForCard__mainInfoBlock_show_value'>
                код товара: <span>{card.code}</span>
              </span>
            </span>
          </div>
          <h1 className='mainContainerForCard__mainInfoBlock_twoBlockTitle'>{`Картина на досках, Украина, категория - ${
            card.category
          }. ${card.name ? `${card.name} "` : '"'}${card.model}"`}</h1>
          <div className='mainContainerForCard__mainInfoBlock_threeBlockPartners'>
            <span className='mainContainerForCard__mainInfoBlock_threeBlockPartners_title'>Наши партнеры - </span>
            <img className='partnersInCard' src='/img-static/privatbank.png' alt='' />
            <img className='partnersInCard' src='/img-static/navaposhta.png' alt='' />
            <img className='partnersInCard' src='/img-static/kievstar.png' alt='' />
            <img className='partnersInCard' src='/img-static/life.png' alt='' />
          </div>
          <div className='mainContainerForCard__mainInfoBlock_fourBlockPrice'>
            <div className='mainContainerForCard__mainInfoBlock_fourBlockPrice_price'>
              <span className='mainContainerForCard__mainInfoBlock_fourBlockPrice_price_count'>
                {'от '}
                {card.price}
              </span>
              <span className='mainContainerForCard__mainInfoBlock_fourBlockPrice_price_money'>грн</span>
            </div>
            {/* <div className="mainContainerForCard__mainInfoBlock_fourBlockPrice_quicly">КУПИТЬ СРАЗУ</div> */}
            <div onClick={() => addItem(card)} className='mainContainerForCard__mainInfoBlock_fourBlockPrice_cart'>
              В КОРЗИНУ
            </div>
          </div>
          <div className='mainContainerForCard__mainInfoBlock_fifeBlockAlreadyBuy'>
            {/* <span className="mainContainerForCard__mainInfoBlock_fifeBlockAlreadyBuy_img"> */}
            {/*    <i className="fa fa-cart-arrow-down" aria-hidden="true"></i> */}
            {/*    <span className="mainContainerForCard__mainInfoBlock_fifeBlockAlreadyBuy_count">&nbsp;&nbsp;уже купило <span>14</span> человека</span> */}
            {/* </span> */}
            {card.sail ? (
              <span className='mainContainerForCard__mainInfoBlock_fifeBlockAlreadyBuy_img'>
                <i className='fa fa-pie-chart shop_blueIco_global' aria-hidden='true' />
                <span className='mainContainerForCard__mainInfoBlock_fifeBlockAlreadyBuy_count'>
                  &nbsp;&nbsp;скидка <span>{card.sail}</span> %
                </span>
              </span>
            ) : null}
            {/* {true || card.isExists */}
            {/*    ? <span className="mainContainerForCard__mainInfoBlock_fifeBlockAlreadyBuy_haveGot"> */}
            {/*        <i className="fa fa-check-circle greenInCard" aria-hidden="true"></i> */}
            {/*        <span className="mainContainerForCard__mainInfoBlock_fifeBlockAlreadyBuy_haveGot__text">&nbsp;&nbsp;Есть в наличии</span> */}
            {/*    </span> */}
            {/*    :  <span className="mainContainerForCard__mainInfoBlock_fifeBlockAlreadyBuy_haveGot"> */}
            {/*        <i className="fa fa-times-circle-o redInCard" aria-hidden="true"></i> */}
            {/*        <span className="mainContainerForCard__mainInfoBlock_fifeBlockAlreadyBuy_haveGot__text">&nbsp;&nbsp;Нет в наличии</span> */}
            {/*    </span> */}
            {/* } */}

            <span className='mainContainerForCard__mainInfoBlock_fifeBlockAlreadyBuy_haveGot'>
              <i className='fa fa-check-circle greenInCard' aria-hidden='true' />
              <span className='mainContainerForCard__mainInfoBlock_fifeBlockAlreadyBuy_haveGot__text'>
                &nbsp;&nbsp;Изготовление 2-3 дня
              </span>
            </span>
            <span className='mainContainerForCard__mainInfoBlock_fifeBlockAlreadyBuy_haveGot'>
              <i className='fa fa-check-circle greenInCard' aria-hidden='true' />
              <span className='mainContainerForCard__mainInfoBlock_fifeBlockAlreadyBuy_haveGot__text'>
                &nbsp;&nbsp;Экологические материалы
              </span>
            </span>
            <span className='mainContainerForCard__mainInfoBlock_fifeBlockAlreadyBuy_haveGot'>
              <i className='fa fa-check-circle greenInCard' aria-hidden='true' />
              <span className='mainContainerForCard__mainInfoBlock_fifeBlockAlreadyBuy_haveGot__text'>
                &nbsp;&nbsp;Свое производство
              </span>
            </span>
          </div>
          <div className='mainContainerForCard__mainInfoBlock_sixBlockDescriptionShort'>
            Вручную изготовленная картина на деревянных досках, наполнит интерьер природой и подчеркнет ваш вкус. К
            каждой картине, сделанной в Украине мы подходим с любовью, что бы ваш подарок себе или близким гармонично
            вписался в стиль который вы создаете.
          </div>

          <div className='clearfix' />
        </div>
        <Price />

        {confirmKind.length ? (
          <Confirm okHandler={closeConfirms} cancelHandler={closeConfirms} unmountConfirm={closeConfirms}>
            {showConfirmWithKind()}
          </Confirm>
        ) : null}
      </div>
    </>
  );
};

export default MainContainerForCard;
