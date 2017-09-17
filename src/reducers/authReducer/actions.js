import axios from "axios";
import {push} from "react-router-redux";
import {showLoading, hideLoading} from "react-redux-loading-bar";
import {AUTH_USER, UNAUTH_USER, AUTH_ERROR, DELETE_ERROR_MESSAGE} from "./types";

const ROOT_URL = process.env.ROOT_URL;

export function deleteErrorMessage() {
    return {type: DELETE_ERROR_MESSAGE};

}

export function saveUserToken(token) {
    return function (dispatch) {
        dispatch({type: AUTH_USER});
        localStorage.setItem('info', token);
        dispatch(push('/panel'));
    }
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

export function signinUser(login, password) {
    console.log(login, password, 'REQUEST222');
    return function (dispatch) {
        // Submit email/password to the server
        dispatch(showLoading())
        axios.post(`${ROOT_URL}/api/signin`, {login, password})
            .then(response => {
                console.log(response, 'resp');
                // If request is good...
                // - Update state to indicate user is authenticated
                dispatch({type: AUTH_USER});
                // - Save the JWT token
                localStorage.setItem('info', response.data);
                // - redirect to the route '/feature'
                // browserHistory.push('/feature');
                dispatch(hideLoading())
                dispatch(push('/profile'))

            })
            .catch((error) => {
                console.log(error.response, 'error.response');
                // If request is bad...
                // - Show an error to the user
                dispatch(hideLoading());
                dispatch(authError(error.response.data.message));
            });
    }
}
export function signupUser(login, password, nick) {
    console.log(login, password, nick, 'REQUEST222');
    // return {type: 'werwerwe', payload:'asd'};
    return function (dispatch) {
        // Submit email/password to the server
        dispatch(showLoading())
        axios.post(`${ROOT_URL}/api/signup`, {login, password, nick})
            .then(response => {
                console.log(response, 'resp');
                console.log(response.message, 'response.message');

                // If request is good...
                // - Update state to indicate user is authenticated
                // dispatch({ type: AUTH_USER });
                // - Save the JWT token
                // localStorage.setItem('info', response.data);
                // - redirect to the route '/feature'
                // browserHistory.push('/feature');
                dispatch(hideLoading())

                dispatch(push({
                    pathname: '/verify-email', state: response.data,
                }))

            })
            .catch((error) => {
                // If request is bad...
                // - Show an error to the user
                dispatch(hideLoading());
                dispatch(authError(error.response.data.message));
            });
    }
}

export function authError(error) {
    return {
        type: AUTH_ERROR,
        payload: error
    };
}

export function signoutUser() {
    console.log('reducer');
    localStorage.removeItem('info');
    return {type: UNAUTH_USER};
}
