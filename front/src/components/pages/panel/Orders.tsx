import React, {useCallback, useEffect, useState} from 'react';
import {Link, useLocation} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import ReactDropdown from 'react-dropdown';
import Filters from './Filters';
import {getTypes} from '../../../redux/reducers/panel-reducer/actions';
import {Token} from '../../../interfaces';
import {IAdminPanel} from '../../../redux/reducers/panel-reducer/adminPanelReducer';
import {selectPanelReducer} from '../../../redux/reducers/panel-reducer/selectors';
import {changeOrderTypeAPI, getOrdersAPI} from '../../../api/endpoints';

interface IOrderTypes {
  value: string;
  label: string;
}

interface IOrdersState {
  orders: [];
  token: Token;
  orderTypes: Array<IOrderTypes>;
}

const initState: IOrdersState = {
  orders: [],
  token: '',
  orderTypes: [
    {value: 'new', label: 'Новый'},
    {value: 'progress', label: 'Обработка'},
    {value: 'done', label: 'Завершен'},
    {value: 'delivery', label: 'В пути'}
  ]
};

const Orders = () => {
  const [state, setState] = useState(initState);

  const location = useLocation();
  const panelReducer: IAdminPanel = useSelector(selectPanelReducer);
  const {countTypes} = panelReducer;

  const dispatch = useDispatch();

  const getTypeFu = useCallback(
    (token: string) => {
      dispatch(getTypes(token));
    },
    [dispatch]
  );

  const getActualPathFromReduxRouter = useCallback((str: string) => {
    const newStr = str
      .replace('?', '')
      .split('&')
      .reduce(function (p: any, e: any) {
        const a = e.split('=');
        p[decodeURIComponent(a[0])] = decodeURIComponent(a[1]);
        return p;
      }, {});
    delete newStr[''];
    return newStr;
  }, []);

  const getOrders = useCallback(() => {
    const getData = async () => {
      let token: Token = '';

      try {
        token = localStorage.getItem('info') || '';
      } catch (error) {
        console.error(error);
      }

      if (!token) {
      } else {
        setState((prevState) => ({...prevState, token}));
        const param = getActualPathFromReduxRouter(location.search)['type'];
        let orders: any = [];
        if (param) {
          try {
            orders = await getOrdersAPI(token, param);
            setState((prevState) => ({...prevState, orders: orders.data}));
          } catch (error) {
            setState((prevState) => ({...prevState, orders}));
            console.log(error.response || error);
          }
        } else {
          try {
            orders = await getOrdersAPI(token);
            setState((prevState) => ({...prevState, orders: orders.data}));
          } catch (error) {
            setState((prevState) => ({...prevState, orders}));
            console.log(error.response);
          }
        }
      }
    };
    getData();
  }, [location.search, getActualPathFromReduxRouter]);

  useEffect(() => {
    window.scrollTo(0, 0);
    getOrders();
  }, []);

  useEffect(() => {
    getOrders();
  }, [countTypes, getOrders, location.search, getActualPathFromReduxRouter]);

  const _changeTypeOrder = useCallback(
    (id: string | number, type: any) => {
      const getData = async (idInternal: string | number, typeInternal: any) => {
        try {
          const data = {
            type: typeInternal.value,
            _id: idInternal
          }
          const res = await changeOrderTypeAPI(state.token as string, data);
          if (res.data && state.token) {
            console.log('getTypeFu', res.data, state.token);
            getTypeFu(state.token);
          }
        } catch (err) {
          console.log(err);
        }
      };

      getData(id, type);
    },
    [getTypeFu, state.token]
  );

  const param = getActualPathFromReduxRouter(location.search)['type'];
  let isShowNoGoods = false;
  if (param) {
    if (countTypes[param] === 0) {
      isShowNoGoods = true;
    }
  }
  return (
    <div className=' left'>
      <Filters />
      {isShowNoGoods && <h1 className='h1InPanelTittle'> ЗАКАЗОВ ЭТОЙ КАТЕГОРИИ НЕТ</h1>}
      {!state.orders.length && !isShowNoGoods && (
        <div className='adminPanelSpinner'>
          <i className='fa fa-spinner' />
        </div>
      )}

      {state.orders.length ? (
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
            {state.orders.map((ord: any) => {
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
                    <span>{ord.email}</span>
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
                        options={state.orderTypes}
                        value={initType}
                        onChange={(ee: any) => _changeTypeOrder(ord._id, ee)}
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
};

export default Orders;
