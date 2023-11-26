import React, {FC} from 'react';
import {useSelector} from 'react-redux';
import {ICartReducerItem} from '../../../redux/reducers/cart-reducer/cartReducer';
import {selectCartItems} from '../../../redux/reducers/cart-reducer/selectors';

interface IAllPrice {}

const AllPrice: FC<IAllPrice> = () => {
  const cartItems: Array<ICartReducerItem> = useSelector(selectCartItems);

  const goods = cartItems;
  const price = goods.reduce(
    (prev: number, cur: any) => prev + Math.floor((cur.price / 100) * (100 - cur.sail) * cur.count),
    0,
  );
  return (
    <div className='allPriceForItems'>
      <span className='allPriceForItems_text'>ВСЕГО К ОПЛАТЕ:&nbsp;&nbsp;</span>
      <span className='allPriceForItems_price'>{price}</span>
      <span className='allPriceForItems_text'>&nbsp;грн.</span>
      <div />
    </div>
  );
};

export default AllPrice;
