import React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {pushToCart} from '../../../../reducers/cart';
class GoodsTable extends React.Component {
    state = {};

    componentDidMount() {
    }

    render() {
        let goods = this.props.cart;
        return(
            <div className="itemsInCart">


                <div className="tableWrapperInOrder">
                    <table className="tableWrapperInOrdertable__table">
                        <thead>
                        <tr>
                            <th>Фото</th>
                            <th>Наимен.</th>
                            <th>Кол-во</th>
                            <th>Цена</th>
                            <th>Уд.</th>
                        </tr>
                        </thead>
                        <tbody>
                        {goods.map(el=>{
                            return <tr key={el._id}>
                                <td data-label="Фото"><img className="imgINOrderTable"
                                                           src={`/img-static/${el.photo[0]}`}
                                                           alt=""/></td>
                                <td data-label="Описание">{el.name} {el.model}</td>
                                <td data-label="Кол-во">
                                    <div className="countCartInTableContainer">
                                        <button className="countCartInTableContainer__countMinus">-</button>
                                        <input value={el.count} readOnly
                                               className="countCartInTableContainer__count"></input>
                                        <button className="countCartInTableContainer__countPlus">+</button>
                                    </div>
                                </td>
                                <td data-label="Цена"><span>{el.price}</span><span>грн.</span></td>
                                <td data-label="Удалить"><span className="deleteCross">X</span></td>
                            </tr>
                        })}

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
        addItem: (item)=> pushToCart(item)
    },dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(GoodsTable);