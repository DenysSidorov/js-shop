import axios from 'axios';
import {showLoading, hideLoading} from 'react-redux-loading-bar';
import {history} from '../../store/configureStore';
import {
  AUTH_USER,
  UNAUTH_USER,
  AUTH_ERROR,
  DELETE_ERROR_MESSAGE,
  APPEAR_LIKE_ADMIN,
  DISAPPEAR_LIKE_ADMIN,
  UNAUTH_USER_SAGA_REQUESTED, SIGN_IN_SAGA_REQUESTED
} from './types';
import urlApi from '../../../api/urlApi';

export function deleteErrorMessage() {
  return {type: DELETE_ERROR_MESSAGE};
}

export function authError(error: any) {
  return {type: AUTH_ERROR, payload: error};
}


export function saveUserToken(token: string) {
  return function (dispatch: Function) {
    dispatch({type: AUTH_USER});
    localStorage.setItem('info', token);
    history.push('/shop');
  };
}

export function isValidToken(token: string | null) {
  return async function (dispatch: Function) {
    try {
      let internalToken = token;
      if (!internalToken) {
        internalToken = localStorage.getItem('info');
      }
      const isValid = await axios.post(`${urlApi}/api/find-user-by-token`, {authtoken: internalToken});
      console.log(isValid.data.isadmin, 'isValid');

      if (isValid.data.isadmin) {
        dispatch({type: AUTH_USER});
      } else {
        dispatch({type: UNAUTH_USER});
      }
    } catch (er) {
      dispatch({type: UNAUTH_USER});
      dispatch({type: DISAPPEAR_LIKE_ADMIN});
      console.log(er);
    }
  };
}

export function isAdminFunc(token?: string | null) {
  return async function (dispatch: Function) {
    try {
      let internalToken = token;
      if (!internalToken) {
        internalToken = localStorage.getItem('info');
      }
      const isAdmin = await axios.post(`${urlApi}/api/isadmin`, {authtoken: internalToken});
      console.log(isAdmin.data.isadmin, 'isamin');

      if (isAdmin.data.isadmin) {
        dispatch({type: APPEAR_LIKE_ADMIN});
        dispatch({type: AUTH_USER});
      } else {
        dispatch({type: DISAPPEAR_LIKE_ADMIN});
      }
    } catch (er) {
      dispatch({type: UNAUTH_USER});
      dispatch({type: DISAPPEAR_LIKE_ADMIN});
      console.log(er);
    }
  };
}



export function signinUser(login: string, password: string) {
  return {type: SIGN_IN_SAGA_REQUESTED, payload: {login, password}}
}

export function signupUser(login: string, password: string, nick: string) {
  console.log(login, password, nick, 'REQUEST');
  return function (dispatch: Function) {
    // Submit email/password to the server
    dispatch(showLoading());
    axios
      .post(`${urlApi}/api/signup`, {login, password, nick})
      .then((response: any) => {
        console.log(response.message, 'response.message');
        dispatch(hideLoading());
        console.log('auth reducer /verify-email');
        history.push({pathname: '/verify-email', state: response.data});
      })
      .catch((error) => {
        dispatch(hideLoading());
        dispatch(authError(error.response.data.message));
      });
  };
}



export function signoutUser() {
  return {type: UNAUTH_USER_SAGA_REQUESTED};
}
