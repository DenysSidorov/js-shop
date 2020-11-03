import axios from 'axios';
import {showLoading, hideLoading} from 'react-redux-loading-bar';
import {GET_TYPES} from './types';
import urlApi from '../../../api/urlApi';

// eslint-disable-next-line import/prefer-default-export
export function getTypes(token: string) {
  return async function (dispatch: Function) {
    dispatch(showLoading());
    try {
      const result = await axios.get(`${urlApi}/api/orders/get-types`, {
        headers: {authorization: token}
      });
      dispatch(hideLoading());
      dispatch({type: GET_TYPES, payload: result.data});
    } catch (err) {
      dispatch(hideLoading());
      console.log(err.message || err);
    }
  };
}
