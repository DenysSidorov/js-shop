import axios from './axiosConfig';
import {ISignUpFunction} from '../redux/reducers/auth-reducer/actions';

export const getTypesAPI = async (token: string) => {
  return axios({
    method: 'get',
    url: '/orders/get-types',
    headers: {authorization: token}
  });
};

export const signInAPI = async (login: any, password: any) => {
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
