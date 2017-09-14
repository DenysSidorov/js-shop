import React from "react";
import st from './index.scss';
class Garanty extends React.Component {



    render() {
        return (
            <div className="exchangeContainer">
                <div className="exchangeContainer__title">Качество и гарантия</div>
                <div>
                    <p className="exchangeContainer__desc">Мы в iLounge сделаем все возможное, что бы решить вашу проблему, которая возникла с любым из наших товаров. Перейдя на "американский" метод обслуживания клиентов, мы даем вам больше гарантий, чем закон о защите прав потребителя. При этом, бюрократические моменты сведены к минимуму.</p>

                    <p className="exchangeContainer__titleSub">В случае неприятности, мы:</p>

                    <p className="exchangeContainer__item">1. Всегда дадим консультацию о товаре</p>
                    <p className="exchangeContainer__item">2. Обменяем или вернем деньги в течение 30-ти дней, если товар бракованный или некачественный</p>
                </div>
            </div>
        )

    }
}

export default Garanty;