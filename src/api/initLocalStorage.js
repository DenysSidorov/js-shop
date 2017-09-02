import {AUTH_USER} from '../reducers/authReducer/types'


export default  (store) =>{
    initTokenAuthLocalStorage(store);
}

export const initTokenAuthLocalStorage = (store) =>{
    const token = localStorage.getItem('info');
// If we have a token, consider the user to be signed in
    if (token) {
        // we need to update application state
        store.dispatch({ type: AUTH_USER });
    }
}
