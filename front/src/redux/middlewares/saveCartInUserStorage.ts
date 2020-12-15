// https://github.com/pshrmn/notes/blob/master/redux/redux-middleware.md
import {Middleware} from 'redux';
import * as cartTypes from '../reducers/cart-reducer/types';
import {setInLocalData} from '../reducers/cart-reducer/local-data-helper';

const types: string[] = Object.values(cartTypes);

const saveCartState: Middleware = store => nextDispatch => action => {
  if (types.indexOf(action.type) !== -1) {
    setTimeout(()=>{
      setInLocalData(store.getState().cartReducer)
    }, 200)
  }
  nextDispatch(action);
};

export default saveCartState;
