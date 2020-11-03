/* eslint-disable no-underscore-dangle */
import {info} from 'react-notification-system-redux';
import {setInLocalData, getFromLocalData} from './local-data-helper';
import {history} from '../../store/configureStore';
import {IComment} from '../../../interfaces';

export const ADD_ITEM_IN_CART: string = 'cart/ADD_ITEM_IN_CART';
export const DELETE_ITEM_IN_CART: string = 'cart/DELETE_ITEM_IN_CART';
export const INCREMENT_ITEM_IN_CART: string = 'cart/INCREMENT_ITEM_IN_CART';
export const DECREMENT_ITEM_IN_CART: string = 'cart/DECREMENT_ITEM_IN_CART';
export const DELETE_ALL_ITEM_IN_CART: string = 'cart/DELETE_ALL_ITEM_IN_CART';

export interface ICartReducerItem {
  _id: number;
  name: string;
  model: string;
  size: number[];
  count: number;
  comments: IComment[];
  views: number;
  likes: number;
  price: number;
  photo: string[];
  code: string | number;
  ['desc-short']: string;
  ['desc-full']: string;
  tags: string[];
  sail: number;
  category: string[];
  isExists: boolean;
  producer: string;
  isNewGood: boolean;
}

export interface ICartReducerState {
  items: Array<ICartReducerItem>;
}
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

export default (state: ICartReducerState = getFromLocalData('cart'), action: any): ICartReducerState => {
  switch (action.type) {
    case ADD_ITEM_IN_CART: {
      let result: ICartReducerState = {items: []};
      let newArr: Array<ICartReducerItem> = [];
      if (state.items.some((el: ICartReducerItem) => el._id === action.payload._id)) {
        state.items.forEach((el: ICartReducerItem) => {
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
      const newState: ICartReducerState = {...state};
      const result = {
        ...newState,
        items: state.items.filter((el: ICartReducerItem) => el._id !== action.payload._id)
      };
      setInLocalData(result);
      return result;
    }
    case DELETE_ALL_ITEM_IN_CART: {
      const result: ICartReducerState = {
        ...state,
        items: []
      };
      setInLocalData(result);
      return result;
    }
    case INCREMENT_ITEM_IN_CART: {
      const newState: ICartReducerState = {...state};
      const newArr: Array<ICartReducerItem> = [];
      if (newState.items.some((el: ICartReducerItem) => el._id === action.payload)) {
        newState.items.forEach((el: ICartReducerItem) => {
          if (el._id === action.payload) {
            const newEl: ICartReducerItem = {...el};
            newEl.count++;
            newArr.push(newEl);
          } else {
            newArr.push(el);
          }
        });
        const result: ICartReducerState = {...newState, items: newArr};
        setInLocalData(result);
        return result;
      }
      setInLocalData(newState);
      return newState;
    }

    case DECREMENT_ITEM_IN_CART: {
      const newState: ICartReducerState = {...state};
      const newArr: Array<ICartReducerItem> = [];
      if (newState.items.some((el: ICartReducerItem) => el._id === action.payload)) {
        newState.items.forEach((el: ICartReducerItem) => {
          if (el._id === action.payload) {
            const newEl: ICartReducerItem = {...el};
            if (newEl.count > 1) {
              newEl.count--;
            }
            newArr.push(newEl);
          } else {
            newArr.push(el);
          }
        });
        const result: ICartReducerState = {...newState, items: newArr};
        setInLocalData(result);
        return result;
      }
      setInLocalData(newState);
      return newState;
    }
    default:
      return state;
  }
};

export const pushToCart = (item: ICartReducerItem) => {
  return function (dispatch: Function) {
    console.log(item, 'ITEM');
    const notificationOpts = {
      title: 'Товар добавлен в корзину',
      message: `${item.name} ${item.model}`,
      autoDismiss: 3,
      action: {
        label: 'В корзину',
        callback: () => history.push('/order')
      },
      position: 'br'
    };
    // @ts-ignore
    dispatch(info(notificationOpts));
    dispatch({type: ADD_ITEM_IN_CART, payload: item});
  };
};

export const deleteFromCart = (item: ICartReducerItem) => {
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
