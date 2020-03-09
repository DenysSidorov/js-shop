import {AUTH_USER} from '../reducers/authReducer/types'

export default (store) => {
  initTokenAuthLocalStorage(store);
}

export const initTokenAuthLocalStorage = (store) => {
  const token = localStorage.getItem('info');
  if (token) {
    store.dispatch({type: AUTH_USER});
  }
}
