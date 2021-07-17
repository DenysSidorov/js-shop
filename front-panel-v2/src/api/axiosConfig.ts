import axios, {AxiosResponse} from 'axios';
import urlApi from './urlApi';
import reqInterceptor from './interceptors/request';
import respInterceptor from './interceptors/response';

export const apiBaseURL = `${urlApi}/api`;

axios.defaults.baseURL = apiBaseURL;
axios.interceptors.request.use(reqInterceptor.onFulfilled, reqInterceptor.onRejected);
axios.interceptors.response.use(respInterceptor.onFulfilled, respInterceptor.onRejected);

export {AxiosResponse};
export default axios;
