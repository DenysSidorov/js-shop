import React from "react";
import {connect} from "react-redux";
import { bindActionCreators } from 'redux';
import Dropdown from "react-dropdown";
import Confirm from "../../WrapperApp/ConfirmBlock";
import {pushToCart, deleteFromCart, incrementItem, decrementItem} from '../../../../reducers/cart';

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
        isShowConfirm: false
    };

    handleConfirmUnmount() {
        this.setState({isShowConfirm: false});
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
                isNormal: true,

            })
        }
    }

    chPayment(paymentObj) {
        this.setState({payment: paymentObj});
    }

    dispatchData() {
        if (this.props.cart.length) {
            this.setState({
                isShowConfirm: true
            })
        }

        console.log(this.state);
    }

    chDelivery(kind, e) {
        console.log(kind, 'k');
        this.setState({delivery: kind})
    }

    render() {
        let goods = this.props.cart;
        const payment = [
            {value: 'predo', label: 'Предоплата на карту'},
            {value: 'naloj', label: 'Наложенный платеж'}
        ];

        let dataForBack = {
            payment: this.state.payment,
            delivery: this.state.delivery,
            name: this.state.name,
            address: this.state.address,
            email: this.state.email,
            phone: this.state.phone,
            goods: []

        };
        goods.forEach((item, ind)=>{
            var curGood = {};
            curGood._id = item._id;
            curGood.count = item.count;
            curGood.name = item.name;
            curGood.model= item.model;
            curGood.sail= item.sail;
            dataForBack.goods.push(curGood);
        });

        console.log(dataForBack, 'dataForBack');
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
                {this.state.isShowConfirm && <Confirm
                    okHandler={()=> console.log('Hello from parrent OK')}
                    cancelHandler={()=> console.log('Hello from parrent cancel')}
                    unmountConfirm={this.handleConfirmUnmount.bind(this)}
                >

                    <ul>
                        <li>
                            <div>Тип доставки:
                                {dataForBack.delivery == "newpost" && <span>Новая Почта</span>}
                                {dataForBack.delivery == "intime" && <span>Интайм</span>}
                            </div>
                            <div>Тип оплаты:
                                {dataForBack.payment.value == "predo" && <span>Предоплата на карту</span>}
                                {dataForBack.payment.value == "naloj" && <span>Наложенный платеж</span>}
                            </div>
                            <div>Имя: <span>{dataForBack.name}</span></div>
                            <div>Телефон: <span>{dataForBack.phone}</span></div>
                            <div>Адрес: <span>{dataForBack.address}</span></div>
                            {dataForBack.email && <div>Почта: <span>{dataForBack.email}</span></div>}
                        </li>
                    </ul>
                </Confirm>}
            </div>
        )

    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        cart: state.cart.items
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return bindActionCreators({
        deleteItem : (item)=> deleteFromCart(item),
        addItem: (item)=> pushToCart(item),
        incrementItem,
        decrementItem
    },dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(WaysDevPay);