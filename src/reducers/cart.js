import Notifications, {success, info} from 'react-notification-system-redux';
import {push} from 'react-router-redux';
import localdata from "../components/shop/helpers/lib/localdata";

export const ADD_ITEM_IN_CART = 'cart/ADD_ITEM_IN_CART';
export const DELETE_ITEM_IN_CART = 'cart/DELETE_ITEM_IN_CART';
export const INCREMENT_ITEM_IN_CART = 'cart/INCREMENT_ITEM_IN_CART';
export const DECREMENT_ITEM_IN_CART = 'cart/DECREMENT_ITEM_IN_CART';
export const DELETE_ALL_ITEM_IN_CART = 'cart/DELETE_ALL_ITEM_IN_CART';
// import Immutable from "immutable";
var t = [{...{}, count: 32}]

const initialState = {
  items: [{
    "_id": 3,
    "name": "Школьный",
    "model": "Classic",
    "size": [
      28,
      35
    ],
    "count": 2,
    "comments": [
      {
        "_id": 1,
        "message": "Купили малышу в школу, остались очень довольны"
      }
    ],
    "views": 23,
    "likes": 5,
    "price": 480,
    "photo": [
      "3.png"
    ],
    "code": "68003",
    "desc-short": "Школьный портфель на детей",
    "desc-full": "Отличный подарок вашему чаду! Школьный портфель на детей",
    "tags": [
      "портфель",
      "черный",
      "школа"
    ],
    "sail": 15,
    "category": [
      "мужской",
      "городской",
      "школа"
    ],
    "isExists": true,
    "producer": "Ukraine",
    "isNewGood": true
  }]//[{count: 2, _id: 231}, {count: 3, _id: 2331}]
}

export default (state = getFromLocalData('cart'), action) => {
  switch (action.type) {

    case ADD_ITEM_IN_CART:
      let newState = {...state};
      let result ={}
      let newArr = [];
      if (newState.items.some(el => el._id == action.payload._id)) {
        newState.items.forEach((el) => {
          if (el._id == action.payload._id) {
            let newEl = {...el};
            newEl.count++;
            newArr.push(newEl);
          } else {
            newArr.push(el);
          }
        })

      } else {
        var newPayload = {...action.payload};
        newPayload.count = 1;
        newArr = [...newState.items, newPayload]
      }
      result = {...newState, items: newArr};
      setInLocalData(result);
      return result;
    // Object.assign({}, state, {
    //     completed: !state.completed
    // }

    //return state.count = 545;  DELETE_ALL_ITEM_IN_CART
    case DELETE_ITEM_IN_CART:
      var newState = {...state};
      result = {
        ...newState,
        items: state.items.filter(el => el._id != action.payload._id)
      };
      setInLocalData(result);
      return result;
    case DELETE_ALL_ITEM_IN_CART:
      var newState = {...state};
      result = {
        ...newState,
        items: []
      };
      setInLocalData(result);
      return result;
    case INCREMENT_ITEM_IN_CART:
      var newState = {...state};
      var newArr = [];
      if (newState.items.some(el => el._id == action.payload)) {
        newState.items.forEach((el) => {
          if (el._id == action.payload) {
            let newEl = {...el};
            newEl.count++;
            newArr.push(newEl);
          } else {
            newArr.push(el);
          }
        })
        result = {...newState, items: newArr};
        setInLocalData(result);
        return result;

      } else {
        setInLocalData(newState);
        return newState
      }
    case DECREMENT_ITEM_IN_CART:
      var newState = {...state};
      var newArr = [];
      if (newState.items.some(el => el._id == action.payload)) {
        newState.items.forEach((el) => {
          if (el._id == action.payload) {


            // let newEl = Immutable.Map(Immutable.fromJS(el));
            // if(newEl.get('count') > 1){
            //     newEl = newEl.set('count', newEl.get('count') - 1 );
            // }
            // newArr.push(newEl.toJS());
            let newEl = {...el};
            if (newEl.count > 1) {
              newEl.count--;
            }
            newArr.push(newEl);
          } else {
            newArr.push(el);
          }
        })
         result = {...newState, items: newArr};
        setInLocalData(result);
        return result;
      } else {
        setInLocalData(newState);
        return newState
      }
    default:
      return state
  }
}

// work without thunk-middleware because returns only plain object {}
// TODO use  --SAGA--

export const pushToCart = (item) => {
  return function (dispatch) {
// var notification = document.querySelector('.notifications-wrapper');
    console.log(item, 'ITEM');
    const notificationOpts = {
      // uid: 'once-please', // you can specify your own uid if required
      title: 'Товар добавлен в корзину',
      message: `${item.name} ${item.model}`,
      position: 'br',
      autoDismiss: 3,
      action: {
        label: 'В корзину',
        callback: () => dispatch(push('/order'))
        // callback: () =>   window.location.href = window.location.origin + '/order'

      }
    };
    dispatch(info(notificationOpts));
    dispatch({type: ADD_ITEM_IN_CART, payload: item});
    // return {type: ADD_ITEM_IN_CART, payload: item}
  }
};

export const deleteFromCart = (item) => {
  return {type: DELETE_ITEM_IN_CART, payload: item}
};

export const incrementItem = (id) => {
  return {type: INCREMENT_ITEM_IN_CART, payload: id}
};

export const decrementItem = (id) => {
  return {type: DECREMENT_ITEM_IN_CART, payload: id}
};

export const deleteAll = () => {
  return {type: DELETE_ALL_ITEM_IN_CART}
};

const setInLocalData = (items) => {
  try {
    localdata.setLocalData('cart', JSON.stringify(items));
  } catch (e) {
    console.log(e);
  }
}

const getFromLocalData = (name) => {
  try {
    var value = JSON.parse(localdata.getLocalData(name));
    if (value) {
      return value
    } else {
      return {items: []}
    }
  } catch (e) {
    localdata.deleteLocalData(name);
    return {items: []}
  }
}