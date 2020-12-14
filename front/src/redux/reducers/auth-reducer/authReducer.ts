import {Action} from 'redux';
import {produce, Draft} from 'immer';

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

const AuthReducer = produce((draft: Draft<IAuthReducerState>, action: IActionAuthReducer): IAuthReducerState | void => {
  /* eslint-disable default-case */
  switch (action.type) {
    case AUTH_USER: {
      draft.error = '';
      draft.authenticated = true;
      break;
    }
    case UNAUTH_USER: {
      draft.authenticated = false;
      draft.isAdmin = false;
      break;
    }
    case AUTH_ERROR: {
      draft.error = action.payload;
      break;
    }
    case FETCH_MESSAGE: {
      draft.message = action.payload;
      break;
    }
    case DELETE_ERROR_MESSAGE: {
      draft.error = '';
      break;
    }

    case APPEAR_LIKE_ADMIN: {
      draft.isAdmin = true;
      break;
    }
    case DISAPPEAR_LIKE_ADMIN: {
      draft.isAdmin = false;
      break;
    }
  }
}, initialState);

export default AuthReducer;
