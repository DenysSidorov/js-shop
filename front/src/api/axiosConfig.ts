import axios from 'axios';
import urlApi from './urlApi';
import reqInterceptor from './interceptors/request';
import respInterceptor from './interceptors/response';

export const apiBaseURL = `${urlApi}/api/v1.0`;

axios.interceptors.request.use(reqInterceptor.onFulfilled, reqInterceptor.onFulfilled);
axios.interceptors.response.use(respInterceptor.onFulfilled, respInterceptor.onFulfilled);

export default axios
