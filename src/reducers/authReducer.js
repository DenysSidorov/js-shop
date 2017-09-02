export const AUTH_USER = 'authReducer/AUTH_USER';
export const UNAUTH_USER ='authReducer/UNAUTH_USER';
export const AUTH_ERROR = 'authReducer/AUTH_ERROR';
export const FETCH_MESSAGE = 'authReducer/FETCH_MESSAGE';


export default function(state = {}, action) {
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