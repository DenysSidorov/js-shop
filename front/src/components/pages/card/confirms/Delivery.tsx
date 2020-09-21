import React from 'react';
import './index.scss';

const Delivery = () => {
  return (
    <div className='exchangeContainer'>
      <div className='exchangeContainer__title'>Быстрая доставка</div>
      <div>
        <p className='exchangeContainer__desc'>
          Мы предоставляем все самые удобные виды доставки, вам остается лишь выбрать лучший для вас.
        </p>

        <p className='exchangeContainer__titleSub'>Какие варианты доставки?</p>

        <p className='exchangeContainer__item'>- Доставка по Украине "Новой Почтой"</p>
        <p className='exchangeContainer__item'>- Доставка по Украине "Интайм"</p>
      </div>
    </div>
  );
};

export default Delivery;
