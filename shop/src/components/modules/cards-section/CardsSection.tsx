import React, {FC} from 'react';
import CardMainPage from '../card/Card';
import {ICartReducerItem} from '../../../redux/reducers/cart-reducer/cartReducer';
import './index.scss';

interface ICardsSection {
  count: number;
  cards: Array<ICartReducerItem>;
}

const CardsSection: FC<ICardsSection> = ({count, cards}) => {
  return (
    <div className='cardSection left fullWidth '>
      <div className='container'>
        <div className='productsCardBlock'>
          <div className='productsCardBlock__navigation' />
          <div className='productsCardBlock__searchCard' />
          <div className='productsCardBlock__searchCard-count'>Найдено : {count}</div>
          <div className='productsCardBlock__bodyCardItems'>
            {cards.map((el: any) => (
              <CardMainPage card={el} key={el._id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardsSection;
