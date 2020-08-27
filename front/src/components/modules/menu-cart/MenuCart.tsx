import React, {FC} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import './index.less';

const MenuCart: FC = ({cart}: any) => {
  let count = 0;
  cart.forEach((el: any) => {
    count += el.count;
  });
  return (
    <Link to='/order' className='main-cart'>
      <i className='fa fa-shopping-cart main-cart__ico' data-js_count={count} />
    </Link>
  );
};

const mapStateToProps = (state: any) => {
  return {
    cart: state.cartReducer.items
  };
};

export default connect(mapStateToProps)(MenuCart);
