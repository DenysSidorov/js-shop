import React, {CSSProperties, FC, useCallback, useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import WaysDevPay from './WaysDevPay';
import GoodsTable from './GoodsTable';
import OneClickModal from '../../parts/modals/one-click-modal/OneClickModal';
import './index.less';
import {setMetaTag, setTitle} from '../../../helpers/libs/utils';
import {ICartReducerItem} from '../../../redux/reducers/cart-reducer/cartReducer';
import {selectCartItems} from '../../../redux/reducers/cart-reducer/selectors';

interface IOrderPage {}

const OrderPage: FC<IOrderPage> = () => {
  const [isShowOneClickModal, setIsShowOneClickModal] = useState<boolean>(false);
  const goods: Array<ICartReducerItem> = useSelector(selectCartItems);

  const initCard = useCallback(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    initCard();
    setTitle('Корзина');
    setMetaTag('description', 'Корзина ваших товаров');
    setMetaTag(
      'keywords',
      'интернет-магазин картин, украинские картины, картины для интерьера, картины на дереве, картины на досках, doshki.com, doshki.kom, картины украина, деревянные картины',
    );
  }, [initCard]);

  const handleShowOneClick = useCallback((state?: boolean | undefined) => {
    if (state === undefined) {
      setIsShowOneClickModal((prevState) => !prevState);
    } else {
      setIsShowOneClickModal(state);
    }
  }, []);

  const styles: CSSProperties = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    flexDirection: 'column',
  };

  return (
    <div style={styles}>
      {/* <MenuInfoSection /> */}
      {goods.length > 0 && (
        <div className='orderPage_fast' onClick={() => handleShowOneClick()}>
          <span>Купить без заполнения формы!</span>
        </div>
      )}
      {!goods.length ? (
        <div style={{padding: '30px'}}>
          <span style={{fontSize: '2rem'}}>Корзина пуста!</span>
        </div>
      ) : (
        <div className='formOrderMain'>
          <GoodsTable />
          <WaysDevPay />
        </div>
      )}
      {isShowOneClickModal ? <OneClickModal close={handleShowOneClick} goods={goods} willDeleteGoods /> : null}
    </div>
  );
};

export default OrderPage;
