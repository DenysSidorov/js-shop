import React from "react";
import {connect} from "react-redux";
import Dropdown from "react-dropdown";
import Confirm from '../../WrapperApp/ConfirmBlock';
// http://fraserxu.me/react-dropdown/
class WaysDevPay extends React.Component {
    state = {
        payment: {value: 'predo', label: 'Предоплата на карту'},
        delivery: 'newpost',
        name: '',
        phone: '',
        address: '',
        email: '',
        isNormal: false,
        isShowConfirm: false,
        renderConfirm: true
    };

    handleConfirmUnmount(){
        this.setState({renderConfirm: false});
    }

    chName(e) {
        console.log(e.target.value);
        if (e.target.value.length < 70) {
            this.setState({name: e.target.value})
        }
        this.validateData();
    }

    chPhone(e) {
        console.log(e.target.value);
        if (e.target.value.length < 70) {
            this.setState({phone: e.target.value})
        }
        this.validateData();
    }

    chAddress(e) {
        console.log(e.target.value);
        if (e.target.value.length < 70) {
            this.setState({address: e.target.value})
        }
        this.validateData();
    }

    chEmail(e) {
        console.log(e.target.value);
        if (e.target.value.length < 70) {
            this.setState({email: e.target.value})
        }
    }

    validateData() {
        // your validate logic
        var emailRegExp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (this.state.name.length < 5
            || this.state.address.length < 4
            || this.state.phone.length < 4
        ) {
            this.setState({
                isNormal: false
            })
        } else {
            this.setState({
                isNormal: true
            })
        }
    }

    chPayment(paymentObj) {
        this.setState({payment: paymentObj});
    }

    dispatchData() {
        console.log(this.state);
    }

    chDelivery(kind, e) {
        console.log(kind, 'k');
        this.setState({delivery: kind})
    }

    render() {
        const payment = [
            {value: 'predo', label: 'Предоплата на карту'},
            {value: 'naloj', label: 'Наложенный платеж'}
        ]

        return (
            <div className="userWaysContainer">
                <div className="userWays">
                    <div className="tittleWAyName" data-count="1">Способ доставки</div>

                    <ul className="accordion">
                        <li className="accordion_item">
                            <input type="radio"
                                   className="accordion_toggle"
                                   name="accordion-01"
                                   id="toggle-01"
                                   checked={this.state.delivery == 'newpost' ? 'checked' : null}
                            />
                            <label onClick={this.chDelivery.bind(this, 'newpost')} className="accordion_trigger"
                                   htmlFor="toggle-01">Доставка по Украине "Новая Почта"
                            </label>
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
                            <input type="radio"
                                   className="accordion_toggle"
                                   name="accordion-01"
                                   id="toggle-02"
                                   checked={this.state.delivery == 'intime' ? 'checked' : null}/>
                            <label onClick={this.chDelivery.bind(this, 'intime')} className="accordion_trigger"
                                   htmlFor="toggle-02">Доставка по Украине
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
                        <Dropdown
                            options={payment}
                            onChange={this.chPayment.bind(this)}
                            value={this.state.payment.label}
                        />
                        {/*<select>*/}
                        {/*<option>Пункт 1</option>*/}
                        {/*<option>Пункт 2</option>*/}
                        {/*</select>*/}
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
                    {this.state.isNormal
                        ? <div onClick={this.dispatchData.bind(this)} className="orderWaysConfirmBtn">
                        <span>Подтвердить</span></div>
                        : <div className="orderWaysConfirmBtnDsbl"><span>Подтвердить</span></div>
                    }

                </div>
                {this.state.renderConfirm && <Confirm
                    okHandler={()=> console.log('Hello from parrent OK')}
                    cancelHandler={()=> console.log('Hello from parrent cancel')}
                    unmountConfirm={this.handleConfirmUnmount.bind(this)}
                >

                    <ul>
                        <li>
                            <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad amet beatae,
                                debitis doloremque dolores ducimus facilis id laboriosam laudantium maiores mollitia,
                                nemo
                                nostrum numquam, quos suscipit vel velit voluptatem.
                            </div>
                            <div>Debitis dolorem odit optio suscipit. Ad animi asperiores assumenda beatae corporis
                                culpa
                                cumque debitis eos explicabo facere inventore laboriosam, maxime nihil quae quasi
                                ratione
                                repellat sint temporibus totam vitae voluptas!
                            </div>
                            <div>Assumenda cupiditate dolores earum eius facere, fugit maiores quasi, qui recusandae
                                reiciendis rem repellendus repudiandae suscipit. Alias amet animi consectetur
                                dignissimos
                                excepturi incidunt ipsam, ipsum modi nulla porro saepe sapiente.
                            </div>
                            <div>Ab asperiores aut cupiditate, ducimus, eos facilis nemo non obcaecati quasi quidem quis
                                tenetur vel, vero. Consequuntur, dolorum incidunt ipsum numquam possimus provident quas.
                                Aspernatur blanditiis ex hic labore omnis!
                            </div>
                        </li>
                    </ul>
                </Confirm>}
            </div>
        )

    }
}

export default connect(null, null)(WaysDevPay);