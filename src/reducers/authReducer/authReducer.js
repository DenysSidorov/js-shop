import {
    AUTH_USER,
    UNAUTH_USER,
    AUTH_ERROR,
    FETCH_MESSAGE
} from './types';
let  initialState = {error:'', authenticated: false, message: ''}

export default function(state = initialState, action) {
    switch(action.type) {
        case AUTH_USER:
            return { ...state, error: '', authenticated: true };
        case UNAUTH_USER:
            return { ...state, authenticated: false };
        case AUTH_ERROR:
            return { ...state, error: action.payload };
        case FETCH_MESSAGE:
            return { ...state, message: action.payload };
    }

    return state;
}