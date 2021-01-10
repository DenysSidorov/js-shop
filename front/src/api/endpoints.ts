import axios from './axiosConfig';
import {ISignUpFunction} from '../redux/reducers/auth-reducer/actions';
import {composeUrlStringFromObj} from '../helpers/libs/queryParams';
import {IEditUser, IGetGoodsParams} from './interfaces';
import {IOrder} from '../components/pages/order/WaysDevPay';
import {AxiosResponse} from 'axios';
import {Token} from '../interfaces';

export const createFastOrderAPI = async (order: IOrder): Promise<AxiosResponse> => {
  return axios({
    method: 'post',
    url: '/orders/land',
    data: {...order}
  });
};

export const changeOrderTypeAPI = async (token: string, data: any): Promise<AxiosResponse> => {
  return axios({
    method: 'post',
    url: '/orders/change-type',
    data,
    headers: {authorization: token}
  });
};

export const getGoodsAPI = async (objParam?: IGetGoodsParams): Promise<AxiosResponse> => {
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

export const getSimilarGoodsByIdAPI = async (id: string | number, categories: string[]): Promise<AxiosResponse> => {
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

export const getGoodByIdAPI = async (id: string | number): Promise<AxiosResponse> => {
  if (id === undefined) {
    throw new Error('Please, set correct id in getGoodByIdAPI endpoint')
  }
  return axios({
    method: 'get',
    url: `/goods/${id}`,
  });
};

export const createOrderAPI = async (order: IOrder): Promise<AxiosResponse> => {
  return axios({
    method: 'post',
    url: '/orders',
    data: {...order}
  });
};

export const getPopularGoodsAPI = async (category?: string, items?: number): Promise<AxiosResponse> => {
  return axios({
    method: 'get',
    url: '/goods/popular',
    params: {category, items}
  });
};

export const getCurrentUserByTokenAPI = async (token: string): Promise<AxiosResponse> => {
  return axios({
    method: 'get',
    url: '/users/current',
    headers: {authorization: token}
  });
};

export const getOrdersAPI = async (token: string, type?: string): Promise<AxiosResponse> => {
  return axios({
    method: 'get',
    url: '/orders',
    headers: {authorization: token},
    params: {type}
  });
};

export const getUniqCategoriesInGoodsAPI = async (): Promise<AxiosResponse> => {
  return axios({
    method: 'get',
    url: '/goods/uniq-categories',
  });
};

export const getTypesAPI = async (token: Token): Promise<AxiosResponse> => {
  return axios({
    method: 'get',
    url: '/orders/get-types',
    headers: {authorization: token}
  });
};

export const signInAPI = async (login: string, password: string): Promise<AxiosResponse> => {
  return axios({
    method: 'post',
    url: '/signin',
    data: {login, password}
  });
};

export const editUserAPI = async (token: Token, data: IEditUser): Promise<AxiosResponse> => {
  return axios({
    method: 'patch',
    url: '/users/update',
    headers: {authorization: token},
    data: data
  });
};

export const signUpAPI: ISignUpFunction = async (login, password, nick): Promise<AxiosResponse> => {
  return axios({
    method: 'post',
    url: '/signup',
    data: {login, password, nick}
  });
};

export const isAdminAPI = async (token: string): Promise<AxiosResponse> => {
  return axios({
    method: 'post',
    url: '/isadmin',
    data: {authtoken: token}
  });
};
