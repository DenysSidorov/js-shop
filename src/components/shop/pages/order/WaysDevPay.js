import React from "react";
import {connect} from "react-redux";

class WaysDevPay extends React.Component {
    state = {
        delivery: null,
        payment: null,
        name: '',
        phone: '',
        address: '',
        email: ''
    };

    chName(e) {
        console.log(e);
        console.log(e.target.value);
        if (e.target.value.length < 70) {
            this.setState({name: e.target.value})
        }
    }

    componentDidMount() {
    }

    render() {
        return (
            <div className="userWaysContainer">
                <div className="userWays">
                    <div className="tittleWAyName" data-count="1">Способ доставки</div>

                    <ul className="accordion">
                        <li className="accordion_item">
                            <input type="radio" className="accordion_toggle" name="accordion-01" id="toggle-01"
                                   readOnly checked/>
                            <label className="accordion_trigger" htmlFor="toggle-01">Доставка по Украине "Новая
                                Почта"</label>
                            <label htmlFor="toggle-01"></label>
                            <div className="accordion_target">
                                <p className="">
                                    Быстрый и удобный способ доставки службой Новая Почта в любой населенный
                                    пункт
                                    Украины.
                                </p>
                            </div>
                        </li>
                        <li className="accordion_item">
                            <input type="radio" className="accordion_toggle" name="accordion-01"
                                   id="toggle-02"/>
                            <label className="accordion_trigger" htmlFor="toggle-02">Доставка по Украине
                                "Интайм"</label>
                            <div className="accordion_target">
                                <p>
                                    Качественная и быстрая доставка в Ваш город, по приятным ценам
                                </p>
                            </div>
                        </li>
                    </ul>

                    <div className="tittleWAyName" data-count="2">Способ оплаты</div>
                    <div className="paymentWayOrder">
                        <select>
                            <option>Пункт 1</option>
                            <option>Пункт 2</option>
                        </select>
                    </div>

                    <div className="tittleWAyName" data-count="3">Способ доставки</div>

                    <div className="userDataForOrder">
                        <p>Имя и фамилия <span className="red">*</span></p>
                        <input value={this.state.name} onChange={this.chName.bind(this)} type="text"
                               className="orderWaysInput" id="nameInput"/>
                        <p>Мобильный телефон <span className="red">*</span></p>
                        <input value={this.state.phone} onChange={this.chPhone.bind(this)} type="text"
                               className="orderWaysInput" id="phoneInput"/>
                        <p>Адресс доставки <span className="red">*</span></p>
                        <input value={this.state.address} onChange={this.chAddress.bind(this)}
                               type="text" className="orderWaysInput" id="cityInput"/>
                        <p>Электронная почта</p>
                        <input value={this.state.email} onChange={this.chEmail.bind(this)}
                               type="text" className="orderWaysInput" id="mailInput"/>
                    </div>

                    <div className="orderWaysConfirmBtn"><span>Подтвердить</span></div>
                </div>
            </div>
        )

    }
}

export default connect(null, null)(WaysDevPay);