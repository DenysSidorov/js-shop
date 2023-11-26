import React, {FC, useEffect} from 'react';
import './index.scss';
import {setMetaTag, setTitle} from '../../../helpers/libs/utils';

const PaymentAndDelivery: FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    setTitle('Оплата и доставка');
    setMetaTag('description', 'Оплата и доставка на doshki.com');
    setMetaTag(
      'keywords',
      'интернет-магазин картин, украинские картины, картины для интерьера, картины на дереве, картины на досках, doshki.com, doshki.kom, картины украина, деревянные картины',
    );
  }, []);
  return (
    <div className='paymentAndDelivery__container'>
      <p>Условия оплаты и доставки.</p>
      <p>Оплатить заказ вы можете удобным для вас способом:</p>
      <ol>
        <li>На расчетный счет Приват банка.</li>
        <li>Оплата заказа при получении, в отделении перевозчика.</li>
      </ol>
      <br />
      <ul>
        <li>
          <span style={{lineHeight: '1.45em', backgroundColor: 'initial'}}>Заказы обрабатываем ежедневно.</span>
        </li>
        <li>
          <span style={{lineHeight: '1.45em', backgroundColor: 'initial'}}>
            Доставка осуществляется транспортной компанией "Новая Почта" или "ИнТайм".&nbsp;
          </span>
        </li>
        <li>
          <span style={{lineHeight: '1.45em', backgroundColor: 'initial'}}>
            Услуги доставки оплачивает покупатель, согласно тарифов компании-перевозчика.
          </span>
        </li>
        <li>
          <span
            style={{
              lineHeight: '1.45em',
              backgroundColor: 'initial',
            }}
          >
            Сроки доставки 1-3 дня.
          </span>
        </li>
      </ul>
      <p style={{fontWeight: 'bold'}}>
        <b>
          <br />
        </b>
      </p>
      <p style={{fontWeight: 'bold'}} />
      <p style={{fontWeight: 'bold'}}>
        <img
          src='https://kupit-rukzak.com.ua//uploads/images/b32a622b6336a207c9be9ead37cfcfbc.png'
          style={{width: '465px', height: '89px', maxWidth: '95%'}}
        />
      </p>
      <p style={{fontWeight: 'bold'}} />
      <p>
        <img
          src='https://kupit-rukzak.com.ua//uploads/images/90625a2380aa604a1f68cc0773b7df84.png'
          style={{width: '481.515px', height: '137px', maxWidth: '95%'}}
        />
      </p>
      <p />
      <br />
      <p />
      <p style={{fontWeight: 'bold'}} />
    </div>
  );
};

export default PaymentAndDelivery;
