import React, {useCallback, useRef, useState} from 'react';
import {connect, useSelector} from 'react-redux';
import Dropdown from 'react-dropdown';
import {bindActionCreators} from 'redux';
// import axios from 'axios';
// import urlApi from '../../../../api/urlApi';
// import {push} from 'react-router-redux';
// import {RouteComponentProps} from 'react-router-dom';
import {RouteComponentProps} from 'react-router-dom';
import Confirm from '../../parts/modals/confirm-cart-modal/ConfirmBlock';
import {
  // pushToCart as pushToCartFu,
  // deleteFromCart as deleteFromCartFu,
  // incrementItem as incrementItemFu,
  // decrementItem as decrementItemFu,
  deleteAll as deleteAllFu,
  ICartReducerItem
} from '../../../redux/reducers/cart-reducer/cartReducer';
import GoodsTable from './GoodsTable';
import {IReducersState} from '../../../redux/reducers';
import {IHistory} from "../../../interfaces";

type PaymentObject = {
  value: string;
  label: string;
};

interface SWaysDevPay {
  payment: PaymentObject;
  delivery: string;
  name: string;
  phone: string;
  address: string;
  email: string;
  isNormal: boolean;
  isShowConfirm: boolean;
  orderInputErrors: Array<string>;
  paymentVariants: Array<PaymentObject>;
}

/**
 deleteItem: (item) => deleteFromCartFu(item),
 addItem: (item) => pushToCartFu(item),
 incrementItem: (id) => incrementItemFu(id),
 decrementItem: (id) => decrementItemFu(id),
 changePage: pushTo,
 deleteAll: () => deleteAllFu()

 changePage
 deleteAll
 * */

// interface IHistory extends RouteComponentProps<any> {
//   location: any;
//   history: any;
// }

interface IWaysDevPay extends IHistory {
  cart: any;
  // pushToCart: Function;
  // deleteFromCart: Function;
  // incrementItem: Function;
  // decrementItem: Function;

  deleteAll: Function;
  // location: any;
  // history: any;
  [key: string]: any;
}

const WaysDevPay = ({history}) => {
  const phoneV: any = useRef<HTMLInputElement>(null);
  const addressV: any = useRef<HTMLInputElement>(null);
  const nameV: any = useRef<HTMLInputElement>(null);
  const emailV: any = useRef<HTMLInputElement>(null);

  const cartItems: Array<ICartReducerItem> = useSelector((state: IReducersState) => state.cartReducer.items);

  const initialState = {
    payment: {value: 'predo', label: 'Предоплата на карту'},
    delivery: 'newpost',
    name: '12345678',
    phone: '12312453',
    address: '123123',
    email: '',
    isNormal: false,
    isShowConfirm: false,
    orderInputErrors: [],
    paymentVariants: [
      {value: 'predo', label: 'Предоплата на карту'},
      {value: 'naloj', label: 'Наложенный платеж'}
    ]
  };

  const [state, setState] = useState<SWaysDevPay>(initialState);

  const chName = useCallback(
    (e: any) => {
      if (e.target.value.length < 70) {
        setState((prev) => ({...prev, name: e.target.value}));
        validateData();
        // this.setState({name: e.target.value}, this.validateData());
      }
    },
    [validateData]
  );

  const chPhone = useCallback(
    (e: any) => {
      if (e.target.value.length < 70) {
        setState((prev) => ({...prev, phone: e.target.value}));
        validateData();
        // this.setState({phone: e.target.value}, this.validateData());
      }
    },
    [validateData]
  );

  const chAddress = useCallback(
    (e: any) => {
      if (e.target.value.length < 70) {
        setState((prev) => ({...prev, address: e.target.value}));
        validateData();
        // this.setState({address: e.target.value}, this.validateData());
      }
    },
    [validateData]
  );

  const chEmail = useCallback(
    (e: any) => {
      if (e.target.value.length < 70) {
        setState((prev) => ({...prev, email: e.target.value}));
        validateData();
        // this.setState({email: e.target.value});
      }
    },
    [validateData]
  );

  const validateData = useCallback((): any => {
    // const {phone, address, name} = state;
    const phone = phoneV.current.value;
    const address = addressV.current.value;
    const name = nameV.current.value;

    const nameErr: string = 'Имя должно быть длиннее 5 символов';
    const phoneErr: string = 'Телефон должен быть длиннее 4 символов';
    const addressErr: string = 'Адрес должен быть длиннее 4 символов';

    const localArr: Array<string> = [];

    if (name.length < 5) {
      localArr.push(nameErr);
    }

    if (phone.length < 4) {
      localArr.push(phoneErr);
    }

    if (address.length < 4) {
      localArr.push(addressErr);
    }
    // this.setState({orderInputErrors: [...orderInputErrors, nameErr]})

    if (localArr.length > 0) {
      setState((prevState) => ({...prevState, isNormal: false, orderInputErrors: [...localArr]}));
      // this.setState({
      //   isNormal: false,
      //   orderInputErrors: [...localArr]
      // });
    } else {
      setState((prevState) => ({...prevState, isNormal: true, orderInputErrors: []}));
      // this.setState({
      //   isNormal: true,
      //   orderInputErrors: []
      // });
    }
  }, []);

  const handleConfirmUnmount = useCallback(() => {
    setState((prevState) => ({...prevState, isShowConfirm: false}));
  }, []);

  const chPayment = useCallback(
    (paymentObj: any) => {
      const {paymentVariants} = state;
      setState((prevState) => ({
        ...prevState,
        payment: paymentObj,
        paymentVariants: [paymentVariants[1], paymentVariants[0]]
      }));
    },
    [state]
  );

  const dispatchData = useCallback(() => {
    if (cartItems.length) {
      setState((prevState) => ({...prevState, isShowConfirm: true}));
      // this.setState({
      //   isShowConfirm: true
      // });
    }

    // console.log(this.state);
  }, [cartItems.length]);

  const chDelivery = useCallback((kind: string) => {
    // console.log(kind, 'k');
    setState((prevState) => ({...prevState, delivery: kind}));
  }, []);

  const changePage = useCallback(
    (id: number) => {
      history.push('/great', id);
    },
    [history]
  );

  const sendDataToServer = useCallback(() => {
    const getData = async () => {
      const price = cartItems.reduce(
        (prev: number, cur: ICartReducerItem) => prev + Math.floor((cur.price / 100) * (100 - cur.sail) * cur.count),
        0
      );
      const order: any = {
        price,
        payment: state.payment,
        delivery: state.delivery,
        name: state.name,
        address: state.address,
        email: state.email,
        phone: state.phone,
        goods: []
      };
      cartItems.forEach((item: any) => {
        const curGood: any = {};
        curGood._id = item._id;
        curGood.count = item.count;
        curGood.name = item.name;
        curGood.model = item.model;
        curGood.sail = item.sail;
        curGood.price = item.price;

        order.goods.push(curGood);
      });

      try {
        let response: any = {data: {_id: 987654321}, _id: 12324453};
        if (response) {
          response = response.data;
          // push('/about-us');
          changePage(response._id);
        }
      } catch (e) {
        console.log(e);
      } finally {
        console.log();
      }
    };
    getData();
  }, [state, cartItems, changePage]);

  // const goods = this.props.cart;
  const {paymentVariants, delivery, name, address, email, phone, payment} = state;
  // let payment = [{value: 'predo', label: 'Предоплата на карту'},
  //   {value: 'naloj', label: 'Наложенный платеж'}]
  return (
    <div className='userWaysContainer'>
      <div className='userWays'>
        <div className='tittleWAyName' data-count='1'>
          Способ доставки
        </div>

        <ul className='accordion'>
          <li className='accordion_item'>
            <input
              type='radio'
              className='accordion_toggle'
              name='accordion-01'
              id='toggle-01'
              defaultChecked={delivery === 'newpost'}
            />
            <label onClick={() => chDelivery('newpost')} className='accordion_trigger' htmlFor='toggle-01'>
              Доставка по Украине "Новая Почта"
            </label>
            <label htmlFor='toggle-01' />
            <div className='accordion_target'>
              <p className=''>
                Быстрый и удобный способ доставки службой Новая Почта в любой населенный пункт Украины.
              </p>
            </div>
          </li>
          <li className='accordion_item'>
            <input
              type='radio'
              className='accordion_toggle'
              name='accordion-01'
              id='toggle-02'
              defaultChecked={delivery === 'intime'}
            />
            <label onClick={() => chDelivery('intime')} className='accordion_trigger' htmlFor='toggle-02'>
              Доставка по Украине "Интайм"
            </label>
            <div className='accordion_target'>
              <p>Качественная и быстрая доставка в Ваш город, по приятным ценам</p>
            </div>
          </li>
        </ul>

        <div className='tittleWAyName' data-count='2'>
          Способ оплаты
        </div>
        <div className='paymentWayOrder'>
          <Dropdown options={paymentVariants} onChange={chPayment} value={paymentVariants[0]} />
        </div>

        <div className='tittleWAyName' data-count='3'>
          Способ доставки
        </div>

        <div className='userDataForOrder'>
          <p>
            <span className='red'>*</span> Имя и фамилия
          </p>
          <input
            value={state.name}
            onChange={chName}
            ref={nameV}
            type='text'
            className='orderWaysInput'
            id='nameInput'
          />
          <p>
            <span className='red'>*</span> Мобильный телефон
          </p>
          <input
            value={state.phone}
            onChange={chPhone}
            type='text'
            ref={phoneV}
            className='orderWaysInput'
            id='phoneInput'
          />
          <p>
            <span className='red'>*</span> Адресс доставки
          </p>
          <input
            value={state.address}
            onChange={chAddress}
            ref={addressV}
            type='text'
            className='orderWaysInput'
            id='cityInput'
          />
          <p>Электронная почта</p>
          <input
            value={state.email}
            onChange={chEmail}
            ref={emailV}
            type='text'
            className='orderWaysInput'
            id='mailInput'
          />
        </div>
        <ul className='orderBadNotifications'>
          {state.orderInputErrors.map((el, ind) => {
            // eslint-disable-next-line react/no-array-index-key
            return <li key={el + ind}>{el}</li>;
          })}
        </ul>
        {state.isNormal ? (
          <div onClick={dispatchData} className='orderWaysConfirmBtn'>
            <span>Подтвердить</span>
          </div>
        ) : (
          <div className='orderWaysConfirmBtnDsbl'>
            <span>Подтвердить</span>
          </div>
        )}
      </div>
      {state.isShowConfirm && (
        <Confirm
          okHandler={sendDataToServer}
          cancelHandler={handleConfirmUnmount}
          unmountConfirm={handleConfirmUnmount}
        >
          <ul>
            <li>
              <div>
                Тип доставки:
                {delivery === 'newpost' && <span> Новая Почта</span>}
                {delivery === 'intime' && <span> Интайм</span>}
              </div>
              <div>
                Тип оплаты:
                {payment.value === 'predo' && <span> Предоплата на карту</span>}
                {payment.value === 'naloj' && <span> Наложенный платеж</span>}
              </div>
              <div>
                Имя: <span>{name}</span>
              </div>
              <div>
                Телефон: <span>{phone}</span>
              </div>
              <div>
                Адрес: <span>{address}</span>
              </div>
              {email && (
                <div>
                  Почта: <span>{email}</span>
                </div>
              )}
            </li>
          </ul>
          <div className='maskForGoodsTableInOrder'>
            <div className='maskForGoodsTableInOrder-mask' />
            {/* <GoodsTable cart={goods} /> */}
            <GoodsTable />
          </div>
        </Confirm>
      )}
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    cart: state.cartReducer.items
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators(
    {
      // deleteItem: (item) => deleteFromCartFu(item),
      // addItem: (item) => pushToCartFu(item),
      // incrementItem: (id) => incrementItemFu(id),
      // decrementItem: (id) => decrementItemFu(id),
      deleteAll: () => deleteAllFu()
    },
    dispatch
  );
};

/**
 cart: any;
 pushToCart: Function;
 deleteFromCart: Function; //
 incrementItem: Function;
 decrementItem: Function;
 deleteAll: Function;
 changePage: Function;
 */

export default connect(mapStateToProps, mapDispatchToProps)(WaysDevPay);
