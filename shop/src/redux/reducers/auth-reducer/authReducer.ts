import {Action} from 'redux';
import {produce, Draft} from 'immer';

import * as types from './types';

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
  payload: any;
}

type IActionAuthReducer = IActionAuthReducerPayloadString; // | IActionAuthReducerPayloadObject

const initialState: IAuthReducerState = {
  error: '',
  authenticated: false,
  message: '',
  isAdmin: false,
};

const AuthReducer = produce((draft: Draft<IAuthReducerState>, action: IActionAuthReducer): IAuthReducerState | void => {
  /* eslint-disable default-case */
  switch (action.type) {
    case types.AUTH_USER: {
      draft.error = '';
      draft.authenticated = true;
      break;
    }
    case types.UNAUTH_USER: {
      draft.authenticated = false;
      draft.isAdmin = false;
      break;
    }
    case types.AUTH_ERROR: {
      draft.error = action.payload;
      break;
    }
    case types.FETCH_MESSAGE: {
      draft.message = action.payload;
      break;
    }
    case types.DELETE_ERROR_MESSAGE: {
      draft.error = '';
      break;
    }

    case types.APPEAR_LIKE_ADMIN: {
      draft.isAdmin = true;
      break;
    }
    case types.DISAPPEAR_LIKE_ADMIN: {
      draft.isAdmin = false;
      break;
    }
  }
}, initialState);

export default AuthReducer;
