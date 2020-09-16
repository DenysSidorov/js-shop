import React, {FC} from 'react';
import {connect} from 'react-redux';

interface IAllPrice {
  cart: any;
}

const AllPrice: FC<IAllPrice> = ({cart}) => {
  const goods = cart;
  const price = goods.reduce(
    (prev: number, cur: any) => prev + Math.floor((cur.price / 100) * (100 - cur.sail) * cur.count),
    0
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

const mapStateToProps = (state: any) => {
  return {
    cart: state.cartReducer.items
  };
};

export default connect(mapStateToProps)(AllPrice);
