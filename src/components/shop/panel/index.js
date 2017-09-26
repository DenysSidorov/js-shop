import React from "react";
import queryParams from '../helpers/lib/queryParams';
import styles from './index.scss';
import axios from "axios";
import {Link} from 'react-router-dom';
import ReactDropdown from 'react-dropdown';
import params from '../helpers/lib/queryParams';
import Filtres from './filtres';
import LoadingBar from 'react-redux-loading-bar';
import {showLoading, hideLoading} from "react-redux-loading-bar";
import menu from './mobileMenu';
import LeftMenu from "./LeftMenu";

class Panel extends React.Component {
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

    // async componentWillReceiveProps(){
    //     console.log('componentWillReceiveProps');
    //     let token;
    //     try {
    //         token = localStorage.getItem("info");
    //     } catch (error){
    //         console.error(error);
    //     }
    //     if (!token) {
    //         this.setState({content: 'Нужно авторизироваться'})
    //     } else {
    //         var param = params['type'];
    //         var orders = [];
    //         if(param){
    //             try {
    //                 orders = await axios.get(`http://localhost:3000/orders?type=${param}`);
    //                 this.setState({
    //                     orders: orders.data
    //                 })
    //             } catch (error) {
    //                 console.log(error.response.data);
    //                 // this.setState({content: error.response.data.message})
    //             }
    //         }  else {
    //             try{
    //                 // orders = await axios.get('http://localhost:3000/orders');
    //
    //                 orders = await axios.get('http://localhost:3000/orders',{
    //                     // timeout: 1000,
    //                     headers: {'authorization': token}
    //                 });
    //                 this.setState({
    //                     orders: orders.data
    //                 })
    //             }catch (error){
    //                 console.log(error.response);
    //                 // this.setState({content: error.response.data.message})
    //             } finally {
    //             this.setState({
    //                 orders: orders.data,
    //             }, ()=>{console.log('get gte');})
    //         }
    //         }
    //         console.log(token, 'token');
    //         console.log(param, 'params');
    //         console.log(orders.data, 'ors');
    //         console.log(orders.data, 'ors');
    //         console.log(orders.data, 'ors');
    //     }
    // }
    componentDidMount = async (prevProps) => {
        window.scrollTo(0, 0);
        // mobile menu
        menu();
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
                    console.log(error);

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
                // todo
            }
        } catch (err) {
            console.log(err);
        }
    }

    render = () => {
        console.log('renders');
        console.log(this.state.orders.length, 'ORDERS LENGTh');
        return (
            <div className="adminPanContainer fullWidth left">
                <div className="adminPanHeader">
                    <div className="adminPanHeader__left">
                        <span className="adminPanHeader__title">Админ Панель</span>
                        <Link to="/" className="adminPanHeader__btn">На сайт</Link>
                        <div className="navBurger">
                            <span></span>
                        </div>

                    </div>
                    <div className="adminPanHeader__right">
                        {/*<span className="adminPanHeader__btn">Выйти</span>*/}
                    </div>
                </div>
                <LoadingBar style={{ backgroundColor: '#2EA9FD', height: '3px' }} />
                <div className="adminPan__mainContent">
                  <LeftMenu/>
                    <div className="adminPan__mainContent_content left">

                        <Filtres/>
                        {console.log(this.state.orders.length, 'this.state.orders.length2')}
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
                                        initType = 'пути';
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
                            {/*<tr>*/}
                            {/*<td data-label="Имя, Phone, Адрес, Mail"><span>Компьютер</span></td>*/}
                            {/*<td data-label="Оплата"><span>Мощный компьютер</span></td>*/}
                            {/*<td data-label="Доставка"><span>Супер данные</span></td>*/}
                            {/*<td data-label="Товар">*/}
                            {/*<ul>*/}
                            {/*<li>Очень хорошая характеристика 1</li>*/}
                            {/*<li>Очень хорошая характеристика 2</li>*/}
                            {/*<li>Очень хорошая характеристика 3</li>*/}
                            {/*</ul>*/}
                            {/*</td>*/}
                            {/*<td data-label="Создан"><span>Большое большое описание</span></td>*/}
                            {/*<td data-label="Звершен"><span>09.02.2017</span></td>*/}
                            {/*<td data-label="Статус"><span>100 000 руб.</span></td>*/}
                            {/*</tr>*/}
                            </tbody>
                        </table>}


                    </div>
                </div>
            </div>
        )

    }
}

export default Panel;
console.log(1213777231);
console.log(121373231);
console.log(12163231);
console.log(1213477231);
console.log(121532314);