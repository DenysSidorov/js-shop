import {
    AUTH_USER,
    UNAUTH_USER,
    AUTH_ERROR,
    FETCH_MESSAGE,
    DELETE_ERROR_MESSAGE,
    APPEAR_LIKE_ADMIN
} from './types';
let  initialState = {error:'', authenticated: false, message: '', isAdmin: false}

export default function(state = initialState, action) {
    switch(action.type) {
        case AUTH_USER:
            return { ...state, error: '', authenticated: true };
        case UNAUTH_USER:
            return { ...state, authenticated: false, isAdmin: false};
        case AUTH_ERROR:
            return { ...state, error: action.payload };
        case FETCH_MESSAGE:
            return { ...state, message: action.payload };
        case DELETE_ERROR_MESSAGE:
            return { ...state, error: ''};

            case APPEAR_LIKE_ADMIN:
            return {...state, isAdmin: true}

    }

    return state;
}