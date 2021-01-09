import React, {useCallback, useRef, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import Dropdown from 'react-dropdown';
import Confirm from '../../parts/modals/confirm-cart-modal/ConfirmBlock';
import {ICartReducerItem} from '../../../redux/reducers/cart-reducer/cartReducer';
import {deleteAll as deleteAllFu} from '../../../redux/reducers/cart-reducer/actions';
import GoodsTable from './GoodsTable';
import {selectCartItems} from '../../../redux/reducers/cart-reducer/selectors';
import {createOrderAPI} from '../../../api/endpoints';

enum DeliveryValue {
  newpost = 'newpost',
  intime = 'intime'
}

enum PaymentValue {
  predo = 'predo',
  naloj = 'naloj'
}

enum PaymentLabel {
  predo = 'Предоплата на карту',
  naloj = 'Наложенный платеж'
}

type PaymentObject = {
  value: PaymentValue;
  label: PaymentLabel;
};

export interface IOrder {
  _id?: string | number
  name: string;
  phone: string;
  price?: number,
  payment?: PaymentObject,
  delivery?: DeliveryValue,
  address?: string;
  email?: string;
  goods?: any[]
}

interface SWaysDevPay {
  payment: PaymentObject;
  delivery: DeliveryValue;
  name: string;
  phone: string;
  address: string;
  email: string;
  isNormal: boolean;
  isShowConfirm: boolean;
  orderInputErrors: Array<string>;
  paymentVariants: Array<PaymentObject>;
}

const WaysDevPay = () => {
  const history = useHistory();
  const phoneV: any = useRef<HTMLInputElement>(null);
  const addressV: any = useRef<HTMLInputElement>(null);
  const nameV: any = useRef<HTMLInputElement>(null);
  const emailV: any = useRef<HTMLInputElement>(null);

  const cartItems: Array<ICartReducerItem> = useSelector(selectCartItems);

  const dispatch = useDispatch();

  const deleteAll = useCallback(() => {
    dispatch(deleteAllFu());
  }, [dispatch]);

  const initialState = {
    payment: {value: PaymentValue.predo, label: PaymentLabel.predo},
    delivery: DeliveryValue.newpost,
    name: '',
    phone: '',
    address: '',
    email: '',
    isNormal: false,
    isShowConfirm: false,
    orderInputErrors: [],
    paymentVariants: [
      {value: PaymentValue.predo, label: PaymentLabel.predo},
      {value: PaymentValue.naloj, label: PaymentLabel.naloj}
    ]
  };

  const [state, setState] = useState<SWaysDevPay>(initialState);

  const validateData = useCallback((): any => {
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

    if (localArr.length > 0) {
      setState((prevState) => ({...prevState, isNormal: false, orderInputErrors: [...localArr]}));
    } else {
      setState((prevState) => ({...prevState, isNormal: true, orderInputErrors: []}));
    }
  }, []);

  const chName = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const name = e.target.value;
      if (name.length < 70) {
        setState((prev) => ({...prev, name}));
        validateData();
      }
    },
    [validateData]
  );

  const chPhone = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const phone = e.target.value;
      if (phone.length < 70) {
        setState((prev) => ({...prev, phone}));
        validateData();
      }
    },
    [validateData]
  );

  const chAddress = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const address = e.target.value;
      if (address.length < 70) {
        setState((prev) => ({...prev, address}));
        validateData();
      }
    },
    [validateData]
  );

  const chEmail = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const email = e.target.value;
      if (email.length < 70) {
        setState((prev) => ({...prev, email}));
        validateData();
      }
    },
    [validateData]
  );

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
    }
  }, [cartItems.length]);

  const chDelivery = useCallback((kind: DeliveryValue) => {
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
      const order: IOrder = {
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
        if (order.goods) {
          order.goods.push(curGood);
        }
      });

      try {
        let response: any = await createOrderAPI(order);
        if (response) {
          deleteAll();
          response = response.data as IOrder;
          changePage(response._id);
        }
      } catch (e) {
        console.log(e);
      } finally {
        console.log();
      }
    };
    getData();
  }, [deleteAll, state, cartItems, changePage]);

  const {paymentVariants, delivery, name, address, email, phone, payment} = state;
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
            <label onClick={() => chDelivery(DeliveryValue.newpost)} className='accordion_trigger' htmlFor='toggle-01'>
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
            <label onClick={() => chDelivery(DeliveryValue.intime)} className='accordion_trigger' htmlFor='toggle-02'>
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
          Реквизиты
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
            className='shopInput'
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
            className='shopInput'
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
            className='shopInput'
            id='cityInput'
          />
          <p>Электронная почта</p>
          <input
            value={state.email}
            onChange={chEmail}
            ref={emailV}
            type='text'
            className='shopInput'
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
            <GoodsTable />
          </div>
        </Confirm>
      )}
    </div>
  );
};

export default WaysDevPay;
