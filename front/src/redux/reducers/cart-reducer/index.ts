/* eslint-disable no-underscore-dangle */
import {info} from 'react-notification-system-redux';
import {setInLocalData, getFromLocalData} from './local-data-helper';

export const ADD_ITEM_IN_CART = 'cart/ADD_ITEM_IN_CART';
export const DELETE_ITEM_IN_CART = 'cart/DELETE_ITEM_IN_CART';
export const INCREMENT_ITEM_IN_CART = 'cart/INCREMENT_ITEM_IN_CART';
export const DECREMENT_ITEM_IN_CART = 'cart/DECREMENT_ITEM_IN_CART';
export const DELETE_ALL_ITEM_IN_CART = 'cart/DELETE_ALL_ITEM_IN_CART';

/**
const initialState = {
  items: [
    {
      _id: 3,
      name: 'Школьный',
      model: 'Classic',
      size: [28, 35],
      count: 2,
      comments: [
        {
          _id: 1,
          message: 'Купили малышу в школу, остались очень довольны'
        }
      ],
      views: 23,
      likes: 5,
      price: 480,
      photo: ['3.png'],
      code: '68003',
      'desc-short': 'Школьный портфель на детей',
      'desc-full': 'Отличный подарок вашему чаду! Школьный портфель на детей',
      tags: ['портфель', 'черный', 'школа'],
      sail: 15,
      category: ['мужской', 'городской', 'школа'],
      isExists: true,
      producer: 'Ukraine',
      isNewGood: true
    }
  ]
};
*/

export default (state = getFromLocalData('cart'), action: any) => {
  switch (action.type) {
    case ADD_ITEM_IN_CART: {
      let result = {};
      let newArr: Array<any> = [];
      if (state.items.some((el: any) => el._id === action.payload._id)) {
        state.items.forEach((el: any) => {
          if (el._id === action.payload._id) {
            const newEl = {...el};
            newEl.count++;
            newArr.push(newEl);
          } else {
            newArr.push(el);
          }
        });
      } else {
        const newPayload = {...action.payload};
        newPayload.count = 1;
        newArr = [...state.items, newPayload];
      }
      result = {...state, items: newArr};
      setInLocalData(result);
      return result;
    }
    case DELETE_ITEM_IN_CART: {
      const newState2 = {...state};
      const result2 = {
        ...newState2,
        items: state.items.filter((el: any) => el._id !== action.payload._id)
      };
      setInLocalData(result2);
      return result2;
    }
    case DELETE_ALL_ITEM_IN_CART: {
      const result = {
        ...state,
        items: []
      };
      setInLocalData(result);
      return result;
    }
    case INCREMENT_ITEM_IN_CART: {
      const newState4 = {...state};
      const newArr4: Array<any> = [];
      if (newState4.items.some((el: any) => el._id === action.payload)) {
        newState4.items.forEach((el: any) => {
          if (el._id === action.payload) {
            const newEl = {...el};
            newEl.count++;
            newArr4.push(newEl);
          } else {
            newArr4.push(el);
          }
        });
        const result = {...newState4, items: newArr4};
        setInLocalData(result);
        return result;
      }
      setInLocalData(newState4);
      return newState4;
    }

    case DECREMENT_ITEM_IN_CART: {
      const newState5 = {...state};
      const newArr5: Array<any> = [];
      if (newState5.items.some((el: any) => el._id === action.payload)) {
        newState5.items.forEach((el: any) => {
          if (el._id === action.payload) {
            const newEl = {...el};
            if (newEl.count > 1) {
              newEl.count--;
            }
            newArr5.push(newEl);
          } else {
            newArr5.push(el);
          }
        });
        const result = {...newState5, items: newArr5};
        setInLocalData(result);
        return result;
      }
      setInLocalData(newState5);
      return newState5;
    }
    default:
      return state;
  }
};

export const pushToCart = (item: any) => {
  return function (dispatch: Function) {
    // var notification = document.querySelector('.notifications-wrapper');
    console.log(item, 'ITEM');
    const notificationOpts = {
      // uid: 'once-please', // you can specify your own uid if required
      title: 'Товар добавлен в корзину',
      message: `${item.name} ${item.model}`,
      autoDismiss: 3,
      action: {
        label: 'В корзину',
        callback: () => {
          alert('Добавленно в корзину, сменна роута');
        }
        // callback: () => dispatch(push('/order'))
        // callback: () =>   window.location.href = window.location.origin + '/order'
      },
      position: 'br'
    };
    // @ts-ignore
    dispatch(info(notificationOpts));
    dispatch({type: ADD_ITEM_IN_CART, payload: item});
  };
};

export const deleteFromCart = (item: any) => {
  return {type: DELETE_ITEM_IN_CART, payload: item};
};

export const incrementItem = (id: string | number) => {
  return {type: INCREMENT_ITEM_IN_CART, payload: id};
};

export const decrementItem = (id: string | number) => {
  return {type: DECREMENT_ITEM_IN_CART, payload: id};
};

export const deleteAll = () => {
  return {type: DELETE_ALL_ITEM_IN_CART};
};
