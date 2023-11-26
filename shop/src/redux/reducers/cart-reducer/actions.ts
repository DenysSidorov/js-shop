import {
  DECREMENT_ITEM_IN_CART,
  DELETE_ALL_ITEM_IN_CART,
  DELETE_ITEM_IN_CART,
  INCREMENT_ITEM_IN_CART,
  ADD_ITEM_IN_CART_SAGA_REQUESTED,
} from './types';
import {ICartReducerItem} from './cartReducer';

export const pushToCart = (item: ICartReducerItem) => {
  return {type: ADD_ITEM_IN_CART_SAGA_REQUESTED, payload: item};
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
