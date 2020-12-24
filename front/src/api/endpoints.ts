import axios from './axiosConfig';

export const getTypesAPI = async (token: string) => {
  return axios({
    method: 'get',
    url: '/orders/get-types',
    headers: {authorization: token}
  });
};

export const signIn = async (login: any, password: any) => {
  return axios({
    method: 'post',
    url: '/signin',
    data: {login, password}
  });
};

export const isAdmin = async (token: string) => {
  return axios({
    method: 'post',
    url: '/isadmin',
    data: {authtoken: token}
  });
};
