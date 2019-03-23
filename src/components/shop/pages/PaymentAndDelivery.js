import React from "react";
import st from './pagesStyles/paymentAndDelivery.scss'
import {setMetaTag, setTitle} from "../helpers/lib/utils";

class PaymentAndDelivery extends React.Component {
  componentDidMount(prevProps) {
    window.scrollTo(0, 0);
    setTitle('Оплата и доставка');
    setMetaTag('description', 'Оплата и доставка shop-ukraine.pro');
    setMetaTag('keywords', 'портфели, сумки, рюкзаки, купить для школы, shop-ukraine.pro');
  }

  render() {
    return (
      <div className="paymentAndDelivery__container">
        <p>
          Условия оплаты и доставки.
        </p>
        <p>
          Оплатить заказ вы можете удобным для вас способом:
        </p>
        <ol>
          <li>На расчетный счет Приват банка.</li>
          <li>Оплата заказа при получении, в отделении "Новой Почты"..</li>
        </ol>
        <br/>
        <ul>
          <li>
                                <span
                                  style={{lineHeight: "1.45em", backgroundColor: "initial"}}>Заказы отправляем ежедневно.</span>
          </li>
          <li><span
            style={{lineHeight: "1.45em", backgroundColor: "initial"}}>Доставка осуществляется транспортной компанией "Новая Почта".&nbsp;
                            </span>
          </li>
          <li><span
            style={{lineHeight: "1.45em", backgroundColor: "initial"}}>Услуги доставки оплачивает покупатель, согласно тарифов компании-перевозчика.
                            </span>
          </li>
          <li>
                                <span
                                  style={{
                                    lineHeight: "1.45em",
                                    backgroundColor: "initial"
                                  }}>Сроки доставки 1-3 дня.</span>
          </li>
          <li>
          </li>
        </ul>
        <p style={{fontWeight: 'bold'}}>
          <b><br/></b>
        </p>
        <p style={{fontWeight: 'bold'}}></p>
        <p
          style={{fontWeight: 'bold'}}><img
          src="https://kupit-rukzak.com.ua//uploads/images/b32a622b6336a207c9be9ead37cfcfbc.png"
          style={{width: '465px', height: '89px', maxWidth: '95%'}}/></p><p
        style={{fontWeight: 'bold'}}></p><p><img
        src="https://kupit-rukzak.com.ua//uploads/images/90625a2380aa604a1f68cc0773b7df84.png"
        style={{width: '481.515px', 'height': '137px', maxWidth: '95%'}}/></p><p></p><br/><p></p>
        <p style={{fontWeight: 'bold'}}></p>
      </div>
    )
  }
}

export default PaymentAndDelivery;