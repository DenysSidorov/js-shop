import {Action} from 'redux';

import {
  AUTH_USER,
  UNAUTH_USER,
  AUTH_ERROR,
  FETCH_MESSAGE,
  DELETE_ERROR_MESSAGE,
  APPEAR_LIKE_ADMIN,
  DISAPPEAR_LIKE_ADMIN
} from './types';

export interface IAuthReducerState {
  error: string;
  authenticated: boolean;
  message: string;
  isAdmin: boolean;
}

export interface IActionAuthReducerPayloadString extends Action {
  type: string;
  payload: string;
}

export interface IActionAuthReducerPayloadObject {
  type: string;
  payload: Object;
}

type IActionAuthReducer = IActionAuthReducerPayloadString; // | IActionAuthReducerPayloadObject

const initialState: IAuthReducerState = {
  error: '',
  authenticated: false,
  message: '',
  isAdmin: false
};

/**
 const reducer = (state, action) => produce(state, draft => {
    switch(action.type) {
        case UPDATE_USER:
            draft.name = action.name;
            break;
    }
});
------

 or

--------
 const curriedProduce = produce((draft, action) => {
  switch (action.type) {

  // add a new package to the starting state
const nextState = curriedProduce(initState, {
  type: 'ADD_PACKAGE',
  package: newPackage,

});

-------

 or

--------
const byId = produce((draft, action) => {
  switch (action.type) {
    case RECEIVE_PRODUCTS:
      action.products.forEach(product => {
        draft[product.id] = product
      })
      break
  }
})

 ------

 or

--------
import {produce, Draft} from 'immer';
const AuthReducer = produce((draft: Draft<DAtMYtype>, action: any) => {

}, initialData)

 * */

const AuthReducer = (state: IAuthReducerState = initialState, action: IActionAuthReducer): IAuthReducerState => {
  switch (action.type) {
    case AUTH_USER: {
      return {...state, error: '', authenticated: true};
    }
    case UNAUTH_USER: {
      return {...state, authenticated: false, isAdmin: false};
    }
    case AUTH_ERROR: {
      return {...state, error: action.payload};
    }
    case FETCH_MESSAGE: {
      return {...state, message: action.payload};
    }
    case DELETE_ERROR_MESSAGE: {
      return {...state, error: ''};
    }

    case APPEAR_LIKE_ADMIN: {
      return {...state, isAdmin: true};
    }
    case DISAPPEAR_LIKE_ADMIN: {
      return {...state, isAdmin: false};
    }
    default:
      return state;
  }
};

export default AuthReducer;
