import axios, {AxiosResponse} from 'axios';
import urlApi from './urlApi';
import reqInterceptor from './interceptors/request';
import respInterceptor from './interceptors/response';

export const apiBaseURL = `${urlApi}/api`;

axios.defaults.baseURL = apiBaseURL;
// axios.defaults.timeout = 3500;

axios.interceptors.request.use(reqInterceptor.onFulfilled, reqInterceptor.onFulfilled);
axios.interceptors.response.use(respInterceptor.onFulfilled, respInterceptor.onFulfilled);

export {AxiosResponse};
export default axios;
