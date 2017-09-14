import React from "react";
import st from './index.scss';
class ExchangeConfirm extends React.Component {



    render() {
        return (
            <div className="exchangeContainer">
                <div className="exchangeContainer__title">Обмен и возврат</div>
                <div>
                    <p className="exchangeContainer__desc">Не понравилось или не подошло?
                        Всякое бывает, вы всегда можете вернуть или обменять товар,
                        купленный у нас, в течении 14 дней в соответствии с Законом Украины
                        «О защите прав потребителей». </p>

                    <p className="exchangeContainer__titleSub">Простые условия обмена или возврата:</p>

                    <p className="exchangeContainer__item">1. Покупатель должен предоставить доказательство покупки с указаной датой</p>
                    <p className="exchangeContainer__item">2. 14 дневный срок для возвратов отсчитывается с момента приобретения товара</p>
                    <p className="exchangeContainer__item">3. У продукта сохранен товарный вид 4. Затраты на обратную доставку оплачиваются покупателем</p>
                </div>
            </div>
        )

    }
}

export default ExchangeConfirm;