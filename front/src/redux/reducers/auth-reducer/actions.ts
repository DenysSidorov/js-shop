import axios from 'axios';
// import {push} from 'react-router-redux';
import {showLoading, hideLoading} from 'react-redux-loading-bar';
import {
  AUTH_USER,
  UNAUTH_USER,
  AUTH_ERROR,
  DELETE_ERROR_MESSAGE,
  APPEAR_LIKE_ADMIN,
  DISAPPEAR_LIKE_ADMIN
} from './types';
import urlApi from '../../../api/urlApi';

export function deleteErrorMessage() {
  return {type: DELETE_ERROR_MESSAGE};
}

export function saveUserToken(token: string) {
  return function (dispatch: Function) {
    dispatch({type: AUTH_USER});
    localStorage.setItem('info', token);
    alert("push('/')");
    // dispatch(push('/'));
  };
}

// export function getUserByToken(token) {
//     console.log(token, 'TOKEN');
//     return function (dispatch) {
//         // Submit email/password to the server
//         dispatch(showLoading())
//         axios.post(`${ROOT_URL}/api/find-user-by-token`, {token})
//             .then(response => {
//                 console.log(response, 'resp');
//                 // If request is good...
//                 // - Update state to indicate user is authenticated
//                 dispatch({type: AUTH_USER});
//                 // - Save the JWT token
//                 localStorage.setItem('info', response.data);
//                 // - redirect to the route '/feature'
//                 // browserHistory.push('/feature');
//                 dispatch(hideLoading())
//                 dispatch(push('/profile'))
//
//             })
//             .catch((error) => {
//                 console.log(error.response, 'error.response');
//                 // If request is bad...
//                 // - Show an error to the user
//                 dispatch(hideLoading());
//                 dispatch(authError(error.response.data.message));
//             });
//     }
//
// }

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
        // dispatch({type: UNAUTH_USER});
        dispatch({type: DISAPPEAR_LIKE_ADMIN});
      }
    } catch (er) {
      dispatch({type: UNAUTH_USER});
      dispatch({type: DISAPPEAR_LIKE_ADMIN});
      console.log(er);
    }
  };
}

export function authError(error: any) {
  return {
    type: AUTH_ERROR,
    payload: error
  };
}

export function signinUser(login: string, password: string) {
  console.log(login, password, 'REQUEST222');
  return function (dispatch: Function) {
    // Submit email/password to the server
    dispatch(showLoading());
    axios
      .post(`${urlApi}/api/signin`, {login, password})
      .then((response) => {
        console.log(response, 'resp');
        // If request is good...
        // - Update state to indicate user is authenticated
        dispatch({type: AUTH_USER});
        // - Save the JWT token
        console.log();
        // todo проверить юзера на админа
        localStorage.setItem('info', response.data);
        // - redirect to the route '/feature'
        // browserHistory.push('/feature');
        dispatch(hideLoading());
        alert("push('/') auth reducer");
        // dispatch(push('/'));
        return response.data;
      })
      .then(async (token) => {
        try {
          const isAdmin = await axios.post(`${urlApi}/api/isadmin`, {authtoken: token});
          console.log(isAdmin.data.isadmin, 'isamin');
          if (isAdmin.data.isadmin) {
            dispatch({type: APPEAR_LIKE_ADMIN});
          } else {
            dispatch({type: DISAPPEAR_LIKE_ADMIN});
          }
        } catch (er) {
          console.log(er);
        }
      })
      .catch((error) => {
        console.log(error.response, 'error.response');
        // If request is bad...
        // - Show an error to the user
        dispatch(hideLoading());
        dispatch(authError(error.response.data.message));
      });
  };
}

export function signupUser(login: string, password: string, nick: string) {
  console.log(login, password, nick, 'REQUEST222');
  // return {type: 'werwerwe', payload:'asd'};
  return function (dispatch: Function) {
    // Submit email/password to the server
    dispatch(showLoading());
    axios
      .post(`${urlApi}/api/signup`, {login, password, nick})
      .then((response: any) => {
        console.log(response, 'resp');
        console.log(response.message, 'response.message');

        // If request is good...
        // - Update state to indicate user is authenticated
        // dispatch({ type: AUTH_USER });
        // - Save the JWT token
        // localStorage.setItem('info', response.data);
        // - redirect to the route '/feature'
        // browserHistory.push('/feature');
        dispatch(hideLoading());

        alert('auth reducer /verify-email');
        // dispatch(
        //   push({
        //     pathname: '/verify-email',
        //     state: response.data
        //   })
        // );
      })
      .catch((error) => {
        // If request is bad...
        // - Show an error to the user
        dispatch(hideLoading());
        dispatch(authError(error.response.data.message));
      });
  };
}

export function signoutUser() {
  console.log('reducer');
  localStorage.removeItem('info');
  return {type: UNAUTH_USER};
}
