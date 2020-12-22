import axios from './axiosConfig';

export const getTypesAPI = async (token: string) => {
  return axios({
    method: 'get',
    url: '/orders/get-types',
    headers: {authorization: token}
  });
};
