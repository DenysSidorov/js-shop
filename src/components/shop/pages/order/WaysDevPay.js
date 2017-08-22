import React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import axios from "axios";
import Dropdown from "react-dropdown";
import Confirm from "../../WrapperApp/ConfirmBlock";
import {pushToCart, deleteFromCart, incrementItem, decrementItem} from "../../../../reducers/cart";
import GoodsTable from "./GoodsTable";
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
        paymentVariants: [
            {value: 'predo', label: 'Предоплата на карту'},
            {value: 'naloj', label: 'Наложенный платеж'}
        ]
    };

    handleConfirmUnmount() {
        this.setState({isShowConfirm: false});
    }

    chName(e) {
        // console.log(e.target.value);
        if (e.target.value.length < 70) {
            this.setState({name: e.target.value})
        }
        this.validateData();
    }

    chPhone(e) {
        // console.log(e.target.value);
        if (e.target.value.length < 70) {
            this.setState({phone: e.target.value})
        }
        this.validateData();
    }

    chAddress(e) {
        // console.log(e.target.value);
        if (e.target.value.length < 70) {
            this.setState({address: e.target.value})
        }
        this.validateData();
    }

    chEmail(e) {
        // console.log(e.target.value);
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

        // console.log(this.state);
    }

    chDelivery(kind, e) {
        // console.log(kind, 'k');
        this.setState({delivery: kind})
    }

   async sendDataToServer() {
        let order = {
            payment: this.state.payment,
            delivery: this.state.delivery,
            name: this.state.name,
            address: this.state.address,
            email: this.state.email,
            phone: this.state.phone,
            goods: []

        };
        this.props.cart.forEach((item, ind)=> {
            var curGood = {};
            curGood._id = item._id;
            curGood.count = item.count;
            curGood.name = item.name;
            curGood.model = item.model;
            curGood.sail = item.sail;
            curGood.price = item.price;

            order.goods.push(curGood);
        });

        try {
           let response =  await axios.post(`http://localhost:3000/orders`,
                {order}
            );
            if(response){
                // TODO disable SPINNER
                // TODO delete order from main redux store
                // TODO redirect to thank you (IMPORTANT TO HAVE orderID !!! )
                //
                console.log(response, 'response');
            }

            // setTimeout(()=>{this.setState({cards: cards.goods})}, 2000)
        } catch (e) {
            console.log(e);
        } finally {
            console.log();
        }


    }

    render() {
        let goods = this.props.cart;
        let {payment, delivery, name, address, email, phone}  = this.state;
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
                                   checked={delivery == 'newpost' ? 'checked' : null}
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
                                   checked={delivery == 'intime' ? 'checked' : null}/>
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
                            value={payment.label}
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
                    okHandler={ this.sendDataToServer.bind(this) }
                    cancelHandler={this.handleConfirmUnmount.bind(this)}
                    unmountConfirm={this.handleConfirmUnmount.bind(this)}
                >

                    <ul>
                        <li>
                            <div>Тип доставки:
                                {delivery == "newpost" && <span> Новая Почта</span>}
                                {delivery == "intime" && <span> Интайм</span>}
                            </div>
                            <div>Тип оплаты:
                                {payment.value == "predo" && <span> Предоплата на карту</span>}
                                {payment.value == "naloj" && <span> Наложенный платеж</span>}
                            </div>
                            <div>Имя: <span>{name}</span></div>
                            <div>Телефон: <span>{phone}</span></div>
                            <div>Адрес: <span>{address}</span></div>
                            {email && <div>Почта: <span>{email}</span></div>}
                        </li>
                    </ul>
                    <div className="maskForGoodsTableInOrder">
                        <div className="maskForGoodsTableInOrder-mask"></div>
                        <GoodsTable cart={goods}/>
                    </div>

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
        deleteItem: (item)=> deleteFromCart(item),
        addItem: (item)=> pushToCart(item),
        incrementItem,
        decrementItem
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(WaysDevPay);