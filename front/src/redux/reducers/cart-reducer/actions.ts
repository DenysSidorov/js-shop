import {Dispatch} from 'redux';
import {history} from '../../store/configureStore';
import {info} from 'react-notification-system-redux';
import {
  ADD_ITEM_IN_CART,
  DECREMENT_ITEM_IN_CART,
  DELETE_ALL_ITEM_IN_CART,
  DELETE_ITEM_IN_CART,
  INCREMENT_ITEM_IN_CART
} from './types';
import {ICartReducerItem} from './cartReducer';

export const pushToCart = (item: ICartReducerItem) => {
  return function (dispatch: Dispatch) {
    fireNotificationAboutNewItemInCart(item, dispatch);
    dispatch({type: ADD_ITEM_IN_CART, payload: item});
  };
};

export const deleteFromCart = (item: ICartReducerItem) => {
  console.log('delete item', item);
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

export const fireNotificationAboutNewItemInCart = (item: ICartReducerItem, dispatch: Dispatch) => {
  console.log(item, 'ITEM!');
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
};


