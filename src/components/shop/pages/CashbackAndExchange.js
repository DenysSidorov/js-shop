import React from "react";
import st from './pagesStyles/cashbackAndExchange.scss';
import {setTitle} from "../helpers/lib/utils";

class CashbackAndExchange extends React.Component {
  componentDidMount(prevProps) {
    window.scrollTo(0, 0)
    setTitle('Возврат и обмен');
  }

  render() {
    return (
      <div className="cashbackAndExchange__container">
        <p>
          Мы с уважением относимся к правам наших покупателей и соблюдаем Закон Украины "О защите прав потребителей".
          Перед отправкой мы проверяем товар на брак.
          Покупатель имеет право вернуть товар в течении 14 дней с момента покупки, в двух случаях:
          В приобретенном товаре был выявлен существенный недостаток. (ст.8)
          Товар не подходит по форме, цвету, размеру и т.д (ст.9)
          Мы предложим вам поменять товар на аналогичный или вернем вам деньги, если:
          товар новый, в упаковке. Без признаков использования.
          сохранился документ, подтверждающий покупку в нашем интернет- магазине.
          Для возврата товара вам необходимо связаться с нами по телефону и уточнить дальнейшие действия. Сумма
          возмещения будет равна цене, на момент покупки товара. Пересылка за счет покупателя.
        </p>
        <div className="cashbackAndExchange__container-img">
          <img src="/img-static/cashback.png" alt="Возврат денег"/>
        </div>
      </div>
    )

  }
}

export default CashbackAndExchange;