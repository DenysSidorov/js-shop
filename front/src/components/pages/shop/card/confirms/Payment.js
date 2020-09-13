import React from 'react';
import './index.scss';

const Payment = () => {
  return (
    <div className='exchangeContainer'>
      <div className='exchangeContainer__title'>Удобная оплата</div>
      <div>
        <p className='exchangeContainer__desc'>
          Для удобства, мы подобрали для вас самые разнообразные способы оплаты, от онлайн платежей до оплаты по факту.
        </p>

        <p className='exchangeContainer__titleSub'>Вы можете оплатить:</p>

        <p className='exchangeContainer__item'>- Онлайн-платежом (Visa/MasterCard, Приват24, LiqPay, Монобанк)</p>
        <p className='exchangeContainer__item'>- Наличными в офисе Новой Почты или ИнТайм</p>
      </div>
    </div>
  );
};

export default Payment;
