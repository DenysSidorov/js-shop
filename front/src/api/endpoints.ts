import axios from './axiosConfig';
import {ISignUpFunction} from '../redux/reducers/auth-reducer/actions';
import {composeUrlStringFromObj} from '../helpers/libs/queryParams';
import {IGetGoodsParams} from './interfaces';
import {IOrder} from '../components/pages/order/WaysDevPay';

export const createFastOrderAPI = async (order: IOrder) => {
  return axios({
    method: 'post',
    url: '/orders/land',
    data: {...order}
  });
};

export const getGoodsAPI = async (objParam?: IGetGoodsParams) => {
  let sort: string = '';
  let pagesize: string = '';
  let numberpage: string = '';

  if (objParam) {
    sort = objParam.sort;
    pagesize = objParam.pagesize;
    numberpage = objParam.numberpage;
  }

  const paramsURL = composeUrlStringFromObj({sort, pagesize, numberpage});

  return axios({
    method: 'get',
    url: `/goods/${paramsURL}`,
  });
};

export const getSimilarGoodsByIdAPI = async (id: string | number, categories: string[]) => {
  if (id === undefined) {
    throw new Error('Please, set correct id in getSimilarGoodsByIdAPI endpoint')
  }

  return axios({
    method: 'post',
    url: `/goods/${id}/similar`,
    data: {
      params: {categories: categories}
    }
  });
};

export const getGoodByIdAPI = async (id: string | number) => {
  if (id === undefined) {
    throw new Error('Please, set correct id in getGoodByIdAPI endpoint')
  }
  return axios({
    method: 'get',
    url: `/goods/${id}`,
  });
};

export const createOrderAPI = async (order: IOrder) => {
  return axios({
    method: 'post',
    url: '/orders',
    data: {...order}
  });
};

export const getPopularGoodsAPI = async (category?: string, items?: number) => {
  return axios({
    method: 'get',
    url: '/goods/popular',
    params: {category, items}
  });
};

export const getCurrentUserByTokenAPI = async (token: string) => {
  return axios({
    method: 'get',
    url: '/users/current',
    headers: {authorization: token}
  });
};

export const getOrdersAPI = async (token: string) => {
  return axios({
    method: 'get',
    url: '/orders',
    headers: {authorization: token}
  });
};

export const getUniqCategoriesInGoodsAPI = async () => {
  return axios({
    method: 'get',
    url: '/goods/uniq-categories',
  });
};

export const getTypesAPI = async (token: string) => {
  return axios({
    method: 'get',
    url: '/orders/get-types',
    headers: {authorization: token}
  });
};

export const signInAPI = async (login: string, password: string) => {
  return axios({
    method: 'post',
    url: '/signin',
    data: {login, password}
  });
};

export const signUpAPI: ISignUpFunction = async (login, password, nick) => {
  return axios({
    method: 'post',
    url: '/signup',
    data: {login, password, nick}
  });
};

export const isAdminAPI = async (token: string) => {
  return axios({
    method: 'post',
    url: '/isadmin',
    data: {authtoken: token}
  });
};
