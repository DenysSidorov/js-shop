import React from 'react';
import CardMainPage from '../card/Card';

interface ICardsSection {
  count: number;
  cards: Array<any>;
}

const CardsSection = ({count, cards}: ICardsSection) => {
  return (
    <div className='cardSection left fullWidth '>
      <div className='container'>
        <div className='productsCardBlock'>
          <div className='productsCardBlock__navigation' />
          <div className='productsCardBlock__searchCard' />
          <div className='productsCardBlock__searchCard-count'>Найдено : {count}</div>

          <div className='productsCardBlock__bodyCardItems'>
            {cards.map((el: any) => (
              // eslint-disable-next-line
              <CardMainPage card={el} key={el._id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardsSection;
