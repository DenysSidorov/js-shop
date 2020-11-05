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

export default function (state: IAuthReducerState = initialState, action: IActionAuthReducer): IAuthReducerState {
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
}
