import React from "react";
import st from './index.scss';
class Delivery extends React.Component {



    render() {
        return (
            <div className="exchangeContainer">
                <div className="exchangeContainer__title">Быстрая доставка</div>
                <div>
                    <p className="exchangeContainer__desc">БЕСПЛАТНАЯ ДОСТАВКА НА ЗАКАЗЫ ОТ 1000 ГРН Мы предоставляем все самые удобные виды доставки, вам остается лишь выбрать лучший для вас.</p>

                    <p className="exchangeContainer__titleSub">Какие варианты доставки?</p>

                    <p className="exchangeContainer__item">- Доставка по Украине "Новой Почтой" — 30 грн</p>
                    <p className="exchangeContainer__item">- Доставка по Украине "Интайм" — 30 грн</p>
                </div>
            </div>
        )

    }
}

export default Delivery;