import axios from 'axios';
import {push} from "react-router-redux";
import { showLoading, hideLoading } from 'react-redux-loading-bar';
import {
    AUTH_USER,
    UNAUTH_USER,
    AUTH_ERROR,
    FETCH_MESSAGE
} from './types';

const ROOT_URL = process.env.ROOT_URL;

export function signinUser( login, password ) {
    console.log(login, password , 'REQUEST222');
    return function(dispatch) {
        // Submit email/password to the server
        dispatch(showLoading())
        axios.post(`${ROOT_URL}/api/signin`, { login, password })
            .then(response => {
                console.log(response, 'resp');
                // If request is good...
                // - Update state to indicate user is authenticated
                dispatch({ type: AUTH_USER });
                // - Save the JWT token
                localStorage.setItem('info', response.data);
                // - redirect to the route '/feature'
                // browserHistory.push('/feature');
                dispatch(hideLoading())
                dispatch(push('/profile'))

            })
            .catch((error) => {
                // If request is bad...
                // - Show an error to the user
                dispatch(hideLoading());
                dispatch(authError('Bad login or password'));
            });
    }
}
export function signupUser( login, password, nick ) {
    console.log(login, password, nick, 'REQUEST222');
  // return {type: 'werwerwe', payload:'asd'};
    return function(dispatch) {
        // Submit email/password to the server
        dispatch(showLoading())
        axios.post(`${ROOT_URL}/api/signup`, { login, password, nick })
            .then(response => {
                console.log(response, 'resp');
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
                dispatch(authError('Bad server response'));
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
    return { type: UNAUTH_USER };
}