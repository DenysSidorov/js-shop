import axios from './axiosConfig';
import {ISignUpFunction} from '../redux/reducers/auth-reducer/actions';
import {composeUrlStringFromObj} from '../helpers/libs/queryParams';
import {IGetGoodsParams} from './interfaces';

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

export const getPopularGoodsAPI = async () => {
  return axios({
    method: 'get',
    url: '/goods/popular',
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
