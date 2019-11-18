import React from "react";
import st from './pagesStyles/cashbackAndExchange.scss';
import {setMetaTag, setTitle} from "../helpers/lib/utils";

class CashbackAndExchange extends React.Component {
  componentDidMount(prevProps) {
    window.scrollTo(0, 0)
    setTitle('Возврат и обмен');
    setMetaTag('description', 'Возврат и обмен в течении 14 дней, соблюдении всех правил честной торговли');
    setMetaTag('keywords', 'интернет-магазин картин, украинские картины, картины для интерьера, картины на дереве, картины на досках, doshki.com, doshki.kom, картины украина, деревянные картины');
  }

  render() {
    return (
      <div className="cashbackAndExchange__container">
        <p>
          Мы с уважением относимся к правам наших покупателей и соблюдаем Закон Украины "О защите прав потребителей".
          Перед отправкой мы проверяем товар на брак.
          Покупатель имеет право вернуть товар в течении 14 дней с момента покупки, в несколькиз случаях:
          В приобретенном товаре был выявлен существенный недостаток. (ст.8)
          Товар был выбран из готовых колекциях на нашем сайте, т.к. последующий сбыт картины с вашим личным фото является проблематичным.
          {/*Товар не подходит по форме, цвету, размеру и т.д (ст.9)*/}{' '}
          Мы предложим вам поменять товар на аналогичный или вернем вам деньги, если:
          товар новый, в упаковке. Без признаков использования.
          сохранился документ, подтверждающий покупку в нашем интернет- магазине.
          Для возврата товара вам необходимо связаться с нами по телефону и уточнить дальнейшие действия. Сумма
          возмещения будет равна цене, на момент покупки товара. Пересылка за счет покупателя. Возможность обмена будет рассмотрена в индивидуальном порядке - т.к. наши картины одновременно попадают под два пункта о невозврате или обмену товара покупателю - это пило-лесо отрезные материалы и продукт типографии, но мы идем клиентам на встречу - и постараемся угодить вам в любых вопросах.

        </p>
        <div className="cashbackAndExchange__container-img">
          <img src="/img-static/cashback.png" alt="Возврат денег"/>
        </div>
      </div>
    )

  }
}

export default CashbackAndExchange;
