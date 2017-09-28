import React from "react";
import queryParams from '../helpers/lib/queryParams';
import styles from './index.scss';
import axios from "axios";
import {Link,Switch, Route} from 'react-router-dom';



import Header from './Header';
import Orders from './Orders';
import LoadingBar from 'react-redux-loading-bar';
import {showLoading, hideLoading} from "react-redux-loading-bar";
import menu from './mobileMenu';
import LeftMenu from "./LeftMenu";

class Panel extends React.Component {
    // state = {
    //     content: null,
    //     orders: [],
    //     token: '',
    //     orderTypes: [
    //         {value: 'new', label: 'Новый'},
    //         {value: 'progress', label: 'Обработка'},
    //         {value: 'done', label: 'Завершен'},
    //         {value: 'delivery', label: 'В пути'},
    //     ]
    // }

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
        // // read user token
        // let token;
        // try {
        //     token = localStorage.getItem("info");
        // } catch (error) {
        //     console.error(error);
        // }
        // if (!token) {
        //     this.setState({content: 'Нужно авторизироваться'})
        // } else {
        //     this.setState({
        //         token
        //     })
        //     var param = params['type'];
        //     var orders = [];
        //     if (param) {
        //         try {
        //             orders = await axios.get(`http://localhost:3000/orders?type=${param}`);
        //             console.log(orders, 1111111111);
        //             this.setState({
        //                 orders: orders.data
        //             })
        //         } catch (error) {
        //             this.setState({
        //                 orders: orders
        //             })
        //             console.log(error.response.data);
        //             // this.setState({content: error.response.data.message})
        //         }
        //
        //     } else {
        //         try {
        //             // orders = await axios.get('http://localhost:3000/orders');
        //
        //             orders = await axios.get('http://localhost:3000/orders', {
        //                 // timeout: 1000,
        //                 headers: {'authorization': token}
        //             });
        //             console.log(orders.data, 2222222222222);
        //             this.setState({
        //                 orders: orders.data
        //             }, () => {
        //                 console.log(this.state.orders, 'ORDERSSSSS');
        //             })
        //         } catch (error) {
        //             this.setState({
        //                 orders: orders
        //             }, () => {
        //                 console.log(this.state.orders, 'ORDERSSSSS');
        //             })
        //             console.log(error.response);
        //
        //             // this.setState({content: error.response.data.message})
        //         }
        //
        //     }
        //     console.log(token, 'token');
        //     console.log(param, 'params');
        //     console.log(orders.data, 'ors');
        //     console.log(orders.data, 'ors');
        //     console.log(this.state.orders, 'ors');
        // }
        //

    };


    render = () => {
        console.log('renders');
        return (
            <div className="adminPanContainer fullWidth left">
               <Header/>
                <LoadingBar style={{ backgroundColor: '#ff7867', height: '3px' }} />
                <div className="adminPan__mainContent">
                  <LeftMenu/>
                    <Switch>
                        <Route exact path="/panel" component={Orders}/>
                        <Route  path="/panel/orders" component={Orders}/>
                        <Route  path="/panel/test" component={User}/>
                        <Route  path="/panel/test2" component={User2}/>

                    </Switch>

                </div>
            </div>
        )

    }
}
const User = ({ match }) => {
    return <h1>Hello user1 {match.params.username}!</h1>
}
const User2 = ({ match }) => {
    return <h1>Hello user 2 {match.params.username}!</h1>
}
export default Panel;