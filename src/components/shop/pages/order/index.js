import React from "react";
import MenuInfoSection from "../../modules/MenuInfoSection";
class Order extends React.Component {
    state = {};

    constructor(props) {
        super(props);
        this.initCadd = this.initCadd.bind(this);

    }

    async initCadd() {
        window.scrollTo(0, 0)
    }

    componentDidMount() {
        this.initCadd();
    }

    render() {
        var styles = {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            flexDirection: 'column'
        }
        return (
            <div style={styles}>
                <MenuInfoSection/>
                <div className="formOrderMain">
                    <div className="itemsInCart">


                        <div className="tableWrapperInOrder">
                            <table className="tableWrapperInOrdertable__table">
                                <thead>
                                <tr>
                                    <th>Фото</th>
                                    <th>Описание</th>
                                    <th>Кол-во</th>
                                    <th>Цена</th>
                                    <th>Уд.</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td data-label="Фото"><img className="imgINOrderTable" src="img-static/life.png"
                                                               alt=""/></td>
                                    <td data-label="Описание">Черный пластиковый чехол Soft Touch для MacBook Pro 13"
                                        Retinat
                                    </td>
                                    <td data-label="Кол-во">
                                        <div className="countCartInTableContainer">
                                            <button className="countCartInTableContainer__countMinus">-</button>
                                            <input value="2" readOnly
                                                   className="countCartInTableContainer__count"></input>
                                            <button className="countCartInTableContainer__countPlus">+</button>
                                        </div>
                                    </td>
                                    <td data-label="Цена"><span>12.4</span><span> ua</span></td>
                                    <td data-label="Удалить"><span className="deleteCross">X</span></td>
                                </tr>
                                <tr>
                                    <td data-label="Фото"><img className="imgINOrderTable"
                                                               src="img-static/arrow_down.png" alt=""/></td>
                                    <td data-label="Описание">Белый пластиковый чехол Soft Touch для MacBook Pro 13"
                                        Retina
                                    </td>
                                    <td data-label="Кол-во">
                                        <div className="countCartInTableContainer">
                                            <button className="countCartInTableContainer__countMinus">-</button>
                                            <input value="2" readOnly
                                                   className="countCartInTableContainer__count"></input>
                                            <button className="countCartInTableContainer__countPlus">+</button>
                                        </div>
                                    </td>
                                    <td data-label="Цена"><span>2312</span><span> ua</span></td>
                                    <td data-label="Удалить"><span className="deleteCross">X</span></td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="allPriceForItems">
                            <span className="allPriceForItems_text">ВСЕГО К ОПЛАТЕ:&nbsp;&nbsp;</span>
                            <span className="allPriceForItems_price">3452</span>
                            <span className="allPriceForItems_text">&nbsp;грн.</span>
                        </div>


                    </div>
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
                                <input type="text" className="orderWaysInput" id="nameInput"/>
                                <p>Мобильный телефон <span className="red">*</span></p>
                                <input type="text" className="orderWaysInput" id="phoneInput"/>
                                <p>Адресс доставки <span className="red">*</span></p>
                                <input type="text" className="orderWaysInput" id="cityInput"/>
                                <p>Электронная почта</p>
                                <input type="text" className="orderWaysInput" id="mailInput"/>
                            </div>

                            <div className="orderWaysConfirmBtn"><span>Подтвердить</span></div>
                        </div>
                    </div>
                </div>
            </div>


        )

    }
}

export default Order;
{/*<div style={{display: 'flex', flexWrap: 'wrap'}}>*/
}
{/*<MenuInfoSection/></div>*/
}