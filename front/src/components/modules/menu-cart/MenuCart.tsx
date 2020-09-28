import React, {FC} from 'react';
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import './index.less';
import {ICartReducerItem} from '../../../redux/reducers/cart-reducer/cartReducer';
import {IReducersState} from '../../../redux/reducers';

const MenuCart: FC = () => {
  let count = 0;
  const cartItems: Array<ICartReducerItem> = useSelector((state: IReducersState) => state.cartReducer.items);
  cartItems.forEach((el: ICartReducerItem) => {
    count += el.count;
  });
  return (
    <Link to='/order' className='main-cart'>
      <i className='fa fa-shopping-cart main-cart__ico' data-js_count={count} />
    </Link>
  );
};

export default MenuCart;
