// https://github.com/pshrmn/notes/blob/master/redux/redux-middleware.md
import {Middleware} from 'redux';
import * as cartTypes from '../reducers/cart-reducer/types';
import {setInLocalData} from '../reducers/cart-reducer/local-data-helper';

// we needn't to react on sagas, that's why we spy only on real reduce's actions
const types: string[] = [
  cartTypes.ADD_ITEM_IN_CART,
  cartTypes.DECREMENT_ITEM_IN_CART,
  cartTypes.DELETE_ALL_ITEM_IN_CART,
  cartTypes.DELETE_ITEM_IN_CART,
  cartTypes.INCREMENT_ITEM_IN_CART
];

const saveCartState: Middleware = store => nextDispatch => (action = {}) => {
  if (types.indexOf(action.type) !== -1) {
    setTimeout(()=>{
      setInLocalData(store.getState().cartReducer);
    }, 200)
  }
  nextDispatch(action);
};

export default saveCartState;
