import React from "react";
import {Link} from 'react-router-dom';
import axios from "axios";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import Filtres from './filtres';
import params from '../helpers/lib/queryParams';
import ReactDropdown from 'react-dropdown';
import {getTypes}from '../../../reducers/panel/actions';
class Orders extends React.Component{
    state = {
        content: null,
        orders: [],
        token: '',
        orderTypes: [
            {value: 'new', label: 'Новый'},
            {value: 'progress', label: 'Обработка'},
            {value: 'done', label: 'Завершен'},
            {value: 'delivery', label: 'В пути'},
        ]
    }

    componentWillReceiveProps = async (prevProps) => {
        console.log('componentWillReceiveProps');
        // read user token
        let token;
        try {
            token = localStorage.getItem("info");
        } catch (error) {
            console.error(error);
        }
        if (!token) {
            this.setState({content: 'Нужно авторизироваться'})
        } else {
            this.setState({token})
            var param = params['type'];
            var orders = [];
            if (param) {
                try {
                    orders = await axios.get(`http://localhost:3000/orders?type=${param}`);
                    console.log(orders, 1111111111);
                    this.setState({
                        orders: orders.data
                    })
                } catch (error) {
                    this.setState({
                        orders: orders
                    })
                    console.log(error.response.data);
                    // this.setState({content: error.response.data.message})
                }

            } else {
                try {
                    // orders = await axios.get('http://localhost:3000/orders');

                    orders = await axios.get('http://localhost:3000/orders', {
                        // timeout: 1000,
                        headers: {'authorization': token}
                    });
                    console.log(orders.data, 2222222222222);
                    this.setState({
                        orders: orders.data
                    }, () => {
                        console.log(this.state.orders, 'ORDERSSSSS');
                    })
                } catch (error) {
                    this.setState({
                        orders: orders
                    }, () => {
                        console.log(this.state.orders, 'ORDERSSSSS');
                    })
                    console.log(error.response);

                    // this.setState({content: error.response.data.message})
                }

            }
        }


    };

    componentDidMount = async (prevProps) => {
        window.scrollTo(0, 0);
        // mobile menu
        // read user token
        let token;
        try {
            token = localStorage.getItem("info");
        } catch (error) {
            console.error(error);
        }
        if (!token) {
            this.setState({content: 'Нужно авторизироваться'})
        } else {
            this.setState({
                token
            })
            var param = params['type'];
            var orders = [];
            if (param) {
                try {
                    orders = await axios.get(`http://localhost:3000/orders?type=${param}`);
                    console.log(orders, 1111111111);
                    this.setState({
                        orders: orders.data
                    })
                } catch (error) {
                    this.setState({
                        orders: orders
                    })
                    console.log(error.response.data);
                    // this.setState({content: error.response.data.message})
                }

            } else {
                try {
                    // orders = await axios.get('http://localhost:3000/orders');

                    orders = await axios.get('http://localhost:3000/orders', {
                        // timeout: 1000,
                        headers: {'authorization': token}
                    });
                    console.log(orders.data, 2222222222222);
                    this.setState({
                        orders: orders.data
                    }, () => {
                        console.log(this.state.orders, 'ORDERSSSSS');
                    })
                } catch (error) {
                    this.setState({
                        orders: orders
                    }, () => {
                        console.log(this.state.orders, 'ORDERSSSSS');
                    })
                    console.log(error.response);

                    // this.setState({content: error.response.data.message})
                }

            }
            console.log(token, 'token');
            console.log(param, 'params');
            console.log(orders.data, 'ors');
            console.log(orders.data, 'ors');
            console.log(this.state.orders, 'ors');
        }


    };

    _changeTypeOrder = async (id, type) => {
        console.log(id, 'id');
        console.log(type.value, 'type');
        try {
            let res = await axios.post('http://localhost:3000/orders/change-type',
                {
                    type: type.value,
                    _id: id
                }, {
                    timeout: 3000,
                    headers: {'authorization': this.state.token}
                });
            console.log(res.data, 'res');
            if(res.data){
                this.props.getType();
            }
        } catch (err) {
            console.log(err);
        }
    }

    render(){
        return(
            <div className="adminPan__mainContent_content left">
                <Filtres/>
                {!this.state.orders.length &&
                <div className="adminPanelSpinner"><i className="fa fa-spinner"></i></div>}
                {this.state.orders.length && <table className="tablePanel">
                    <thead>
                    <tr>
                        <th>Имя</th>
                        <th>Phone</th>
                        <th>Адрес</th>
                        <th>Mail</th>
                        <th>Оплата</th>
                        <th>Доставка</th>
                        <th>Товар</th>
                        <th>Создан</th>
                        <th>Звершен</th>
                        <th>Статус</th>
                        <th>К оплате</th>
                    </tr>
                    </thead>
                    <tbody>

                    {this.state.orders.map((ord, index) => {
                        let initType = '';
                        switch (ord.type) {
                            case('new'):
                                initType = 'Новый';
                                break;
                            case('progress'):
                                initType = 'Обработка';
                                break;
                            case('done'):
                                initType = 'Завершен';
                                break;
                            case('delivery'):
                                initType = 'В пути';
                                break;
                            default:
                                initType = 'Ошибка'
                        }
                        return <tr key={ord._id}>
                            <td data-label="Имя">
                                <span>{ord.name}</span>
                            </td>
                            <td data-label="Phone">
                                <span>{ord.phone}</span>
                            </td>
                            <td data-label="Адрес">
                                <span>{ord.address}</span>
                            </td>
                            <td data-label="Mail">
                                <span>{ord.mail}</span>
                            </td>
                            <td data-label="Оплата"><span>{ord.payment.value}</span></td>
                            <td data-label="Доставка"><span>{ord.delivery}</span></td>
                            <td data-label="Товар"><span>{ord.goods.map((el, ind) => {
                                return <Link className="linkToGood" key={ind} to={`/card/${el._id}`}>{ind > 0 &&
                                <span>||||</span>} {el.name} {el.model} (кол-во{el.count}) </Link>
                            })}</span></td>
                            <td data-label="Создан"><span>{new Date(ord.createdAt).toLocaleString()}</span></td>
                            <td data-label="Звершен"><span>{ord.finishedAt}</span></td>
                            <td data-label="Статус"><span>
                                <ReactDropdown
                                    options={this.state.orderTypes}
                                    value={initType}
                                    onChange={this._changeTypeOrder.bind(this, ord._id)}
                                />
                            </span></td>
                            <td data-label="Статус"><span>{ord.price}</span></td>

                        </tr>
                    })}
                    </tbody>
                </table>}
            </div>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        countTypes: state.adminPanelReducer.countTypes
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return bindActionCreators({
        getType : (token)=> getTypes(token)
    },dispatch)
}


export default connect(
    mapStateToProps, mapDispatchToProps
)(Orders);