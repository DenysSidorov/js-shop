import React from "react";
import queryParams from '../helpers/lib/queryParams';
import styles from './index.scss';
import axios from "axios";
import {Link} from 'react-router-dom';
import params from '../helpers/lib/queryParams';
import menu from './mobileMenu';

class Panel extends React.Component {
    state = {
        content: null,
        orders: []
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

    render = () => {
        console.log('renders');
        console.log(this.state.orders.length, 'ORDERS LENGTh');
        return (
            <div className="adminPanContainer fullWidth left">
                <div className="adminPanHeader">
                    <div className="adminPanHeader__left">
                        <span className="adminPanHeader__title">Админ Панель</span>
                        <span className="adminPanHeader__btn">На сайт</span>
                        <div className="navBurger">
                            <span></span>
                        </div>

                    </div>
                    <div className="adminPanHeader__right">
                        <span className="adminPanHeader__btn">Выйти</span>
                    </div>
                </div>
                <div className="adminPan__mainContent">
                    <div className="adminPan__mainContent_menu leftMenuSection left">
                        <div className="adminPan__menu_item">
                            <i className="fa fa-credit-card"></i>
                            <span className="adminPan__menu_item_text">Заказы</span>
                            <span className="adminPan__menu_item_count"><span>4</span></span>
                        </div>
                    </div>
                    <div className="adminPan__mainContent_content left">

                        <div className="adminPan__mainContent_content_filters">

                            <div className="adminPan__filters_item">
                                <div className="adminPan__filters_item_log colorGreen">
                                    <i className="fa fa-shopping-cart"></i>
                                </div>
                                <div className="adminPan__filters_item_text">
                                    <div className="adminPan__filters_item_text_count">12 шт.</div>
                                    <div className="adminPan__filters_item_text_desk">Новых покупок</div>
                                </div>
                            </div>

                            <div className="adminPan__filters_item">
                                <div className="adminPan__filters_item_log colorYellow">
                                    <i className="fa fa-spinner"></i>
                                </div>
                                <div className="adminPan__filters_item_text">
                                    <div className="adminPan__filters_item_text_count">5 шт.</div>
                                    <div className="adminPan__filters_item_text_desk">В обработке</div>
                                </div>
                            </div>

                            <div className="adminPan__filters_item">
                                <div className="adminPan__filters_item_log colorViolet">
                                    <i className="fa fa-truck"></i>
                                </div>
                                <div className="adminPan__filters_item_text">
                                    <div className="adminPan__filters_item_text_count">18 шт.</div>
                                    <div className="adminPan__filters_item_text_desk">В пути</div>
                                </div>
                            </div>

                            <div className="adminPan__filters_item">
                                <div className="adminPan__filters_item_log colorRed">
                                    <i className="fa fa-check-square-o"></i>
                                </div>
                                <div className="adminPan__filters_item_text">
                                    <div className="adminPan__filters_item_text_count">335 шт.</div>
                                    <div className="adminPan__filters_item_text_desk">Завершено</div>
                                </div>
                            </div>

                            <div className="adminPan__filters_item">
                                <div className="adminPan__filters_item_log colorMain">
                                    <i className="fa fa-money"></i>
                                </div>
                                <div className="adminPan__filters_item_text">
                                    <div className="adminPan__filters_item_text_count">371 шт.</div>
                                    <div className="adminPan__filters_item_text_desk">Все</div>
                                </div>
                            </div>
                        </div>
                        {console.log(this.state.orders.length, 'this.state.orders.length2')}
                        {!this.state.orders.length && <div className="adminPanelSpinner"><i className="fa fa-spinner"></i></div>}
                        {this.state.orders.length && <table className="tablePanel">
                            <thead>
                            <tr>
                                <th>Имя, Phone, Адрес, Mail</th>
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

                            {this.state.orders.map((ord,index)=>{
                            return <tr key={ord._id}>
                            <td data-label="Имя, Phone, Адрес, Mail">
                            <span>{ord.name}| {ord.phone}| {ord.address}| {ord.mail}</span>
                            </td>
                            <td data-label="Оплата"><span>{ord.payment.value}</span></td>
                            <td data-label="Доставка"><span>{ord.delivery}</span></td>
                            <td data-label="Товар"><span>{ord.goods.map((el,ind)=>{
                                return <Link className="linkToGood" to={`/card/${el._id}`}>{ind > 0 && <span>||||</span>} {el.name} {el.model} (кол-во{el.count}) </Link>
                            })}</span></td>
                            <td data-label="Создан"><span>{new Date(ord.createdAt).toLocaleString()}</span></td>
                            <td data-label="Звершен"><span>{ord.finishedAt}</span></td>
                            <td data-label="Статус"><span>{ord.type}</span></td>
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
console.log(1213231);
console.log(1213231);
console.log(1213231);
console.log(1213231);
console.log(12132314);