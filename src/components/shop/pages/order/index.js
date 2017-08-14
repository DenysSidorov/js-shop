import React from "react";
import { connect } from 'react-redux';
import MenuInfoSection from "../../modules/MenuInfoSection";
import WaysDevPay from "./WaysDevPay";
import GoodsTable from "./GoodsTable";
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
                    <WaysDevPay/>
                </div>
            </div>


        )

    }
}

export default connect(null, null)(Order);
{/*<div style={{display: 'flex', flexWrap: 'wrap'}}>*/
}
{/*<MenuInfoSection/></div>*/
}