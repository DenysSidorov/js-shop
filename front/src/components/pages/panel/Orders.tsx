import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import ReactDropdown from 'react-dropdown';
import Filters from './Filters';
import urlApi from '../../../api/urlApi';
import {getTypes} from '../../../redux/reducers/panel-reducer/actions';

interface IOrders {
  getTypeFu: Function;
  location: any;
  countTypes: any;
}

class Orders extends React.Component<IOrders> {
  state = {
    // content: null,
    orders: [],
    token: '',
    orderTypes: [
      {value: 'new', label: 'Новый'},
      {value: 'progress', label: 'Обработка'},
      {value: 'done', label: 'Завершен'},
      {value: 'delivery', label: 'В пути'}
    ]
  };

  _getActualPathFromReduxRouter = (string: any) => {
    const newStr = string
      .replace('?', '')
      .split('&')
      .reduce(function (p: any, e: any) {
        const a = e.split('=');
        // eslint-disable-next-line no-param-reassign
        p[decodeURIComponent(a[0])] = decodeURIComponent(a[1]);
        return p;
      }, {});
    delete newStr[''];
    return newStr;
  };

  UNSAFE_componentWillReceiveProps = async () => {
    // read user token
    let token;
    try {
      token = localStorage.getItem('info');
    } catch (error) {
      console.error(error);
    }
    if (!token) {
      // this.setState({content: 'Нужно авторизироваться'});
    } else {
      this.setState({token});
      const param = this._getActualPathFromReduxRouter(window.location.search)['type'];
      let orders: any = [];
      if (param) {
        try {
          orders = await axios.get(`${urlApi}/api/orders?type=${param}`, {
            // timeout: 1000,
            headers: {authorization: token}
          });

          this.setState({
            orders: orders.data
          });
        } catch (error) {
          this.setState({
            orders
          });
          console.log(error.response || error);
          // this.setState({content: error.response.data.message})
        }
      } else {
        try {
          // orders = await axios.get('http://127.0.0.1:3000/orders');

          orders = await axios.get(`${urlApi}/api/orders`, {
            // timeout: 1000,
            headers: {authorization: token}
          });

          this.setState({
            orders: orders.data
          });
        } catch (error) {
          this.setState({
            orders
          });
          console.log(error.response);
          // this.setState({content: error.response.data.message})
        }
      }
    }
  };

  componentDidMount = async () => {
    window.scrollTo(0, 0);
    // mobile menu
    // read user token
    let token;
    try {
      token = localStorage.getItem('info');
    } catch (error) {
      console.error(error);
    }
    if (!token) {
      // this.setState({content: 'Нужно авторизироваться'});
    } else {
      this.setState({
        token
      });
      const param = this._getActualPathFromReduxRouter(window.location.search)['type'];
      let orders: any = [];
      // console.log(params, 'param');
      if (param) {
        try {
          orders = await axios.get(`${urlApi}/api/orders?type=${param}`, {
            // timeout: 1000,
            headers: {authorization: token}
          });
          this.setState({
            orders: orders.data
          });
        } catch (error) {
          this.setState({
            orders
          });
          console.log(error.response || error);
          // this.setState({content: error.response.data.message})
        }
      } else {
        try {
          // orders = await axios.get('http://127.0.0.1:3000/orders');

          orders = await axios.get(`${urlApi}/api/orders`, {
            // timeout: 1000,
            headers: {authorization: token}
          });
          this.setState({
            orders: orders.data
          });
        } catch (error) {
          this.setState({
            orders
          });
          console.log(error.response);
          // this.setState({content: error.response.data.message})
        }
      }
      console.log(token, 'token');
      console.log(param, 'params');
      console.log(orders.data, 'ors');
    }
  };

  _changeTypeOrder = async (id: string | number, type: any) => {
    try {
      const res = await axios.post(
        `${urlApi}/api/orders/change-type`,
        {
          type: type.value,
          _id: id
        },
        {
          timeout: 3000,
          headers: {authorization: this.state.token}
        }
      );
      console.log(res.data, 'res');
      if (res.data) {
        this.props.getTypeFu(this.state.token);
      }
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    const param = this._getActualPathFromReduxRouter(this.props.location.search)['type'];
    let isShowNoGoods = false;
    if (param) {
      if (this.props.countTypes[param] === 0) {
        isShowNoGoods = true;
      }
    }
    return (
      <div className=' left'>
        <Filters />
        {isShowNoGoods && <h1 className='h1InPanelTittle'> ЗАКАЗОВ ЭТОЙ КАТЕГОРИИ НЕТ</h1>}
        {!this.state.orders.length && !isShowNoGoods && (
          <div className='adminPanelSpinner'>
            <i className='fa fa-spinner' />
          </div>
        )}

        {this.state.orders.length ? (
          <table className='tablePanel'>
            <thead>
              <tr>
                <th>Заказ</th>
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
              {this.state.orders.map((ord: any) => {
                let initType = '';
                switch (ord.type) {
                  case 'new':
                    initType = 'Новый';
                    break;
                  case 'progress':
                    initType = 'Обработка';
                    break;
                  case 'done':
                    initType = 'Завершен';
                    break;
                  case 'delivery':
                    initType = 'В пути';
                    break;
                  default:
                    initType = 'Ошибка';
                }
                return (
                  <tr title={ord._id} key={ord._id}>
                    <td data-label='Заказ'>
                      <span>{ord._id}</span>
                    </td>
                    <td data-label='Имя'>
                      <span>{ord.name}</span>
                    </td>
                    <td data-label='Phone'>
                      <span>{ord.phone}</span>
                    </td>
                    <td data-label='Адрес'>
                      <span>{ord.address}</span>
                    </td>
                    <td data-label='Mail'>
                      <span>{ord.mail}</span>
                    </td>
                    <td data-label='Оплата'>
                      <span>{ord.payment ? ord.payment.value : 'No'}</span>
                    </td>
                    <td data-label='Доставка'>
                      <span>{ord.delivery}</span>
                    </td>
                    <td data-label='Товар'>
                      <span>
                        {ord.goods.map((el: any, ind: number) => {
                          return (
                            <Link className='linkToGood' key={el._id} to={`/card/${el._id}`}>
                              {ind > 0 && <span>____</span>} {el.name} {el.model} ({el.count} шт.){' '}
                            </Link>
                          );
                        })}
                      </span>
                    </td>
                    <td data-label='Создан'>
                      <span>{new Date(ord.createdAt).toLocaleString()}</span>
                    </td>
                    <td data-label='Звершен'>
                      <span>{ord.finishedAt}</span>
                    </td>
                    <td data-label='Статус'>
                      <span className='dropdownPanelOrders'>
                        <ReactDropdown
                          options={this.state.orderTypes}
                          value={initType}
                          onChange={(ee: any) => this._changeTypeOrder(ord._id, ee)}
                        />
                      </span>
                    </td>
                    <td data-label='Статус'>
                      <span>{ord.price}</span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        ) : null}
      </div>
    );
  }
}
const mapStateToProps = (state: any) => {
  return {
    countTypes: state.panelReducer.countTypes
  };
};
const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators(
    {
      getTypeFu: (token) => getTypes(token)
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Orders);
