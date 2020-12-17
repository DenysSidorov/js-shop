// import {info} from 'react-notification-system-redux';
import {produce, Draft} from 'immer';
import {getFromLocalData} from './local-data-helper';
// import {history} from '../../store/configureStore';
import {IComment} from '../../../interfaces';
import {
  ADD_ITEM_IN_CART,
  DELETE_ITEM_IN_CART,
  INCREMENT_ITEM_IN_CART,
  DECREMENT_ITEM_IN_CART,
  DELETE_ALL_ITEM_IN_CART
} from './types';


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

const initialState: ICartReducerState = getFromLocalData();

export default produce((draft: Draft<ICartReducerState>, action: any): ICartReducerState | void => {
  switch (action.type) {
    case ADD_ITEM_IN_CART: {
      if (draft.items.some((el: ICartReducerItem) => el._id === action.payload._id)) {
        draft.items.forEach((el: ICartReducerItem, index) => {
          if (el._id === action.payload._id) {
            draft.items[index].count = draft.items[index].count + 1;
          }
        });
      } else {
        draft.items.push({...action.payload, count: 1});
      }
      break;
    }
    case DELETE_ITEM_IN_CART: {
      const filteredDraftItems = draft.items.filter((el: ICartReducerItem) => el._id !== action.payload._id);
      draft.items = filteredDraftItems;
      break;
    }
    case DELETE_ALL_ITEM_IN_CART: {
      draft.items = [];
      break;
    }
    case INCREMENT_ITEM_IN_CART: {
      if (draft.items.some((el: ICartReducerItem) => el._id === action.payload)) {
        draft.items.forEach((el: ICartReducerItem, index) => {
          if (el._id === action.payload) {
            draft.items[index].count = draft.items[index].count + 1;
          }
        });
      }
      break;
    }
    case DECREMENT_ITEM_IN_CART: {
      if (draft.items.some((el: ICartReducerItem) => el._id === action.payload)) {
        draft.items.forEach((el: ICartReducerItem, index) => {
          if (el._id === action.payload) {
            if (el.count > 1) {
              draft.items[index].count = draft.items[index].count - 1;
            }
          }
        });
      }
      break;
    }
  }
}, initialState);

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
