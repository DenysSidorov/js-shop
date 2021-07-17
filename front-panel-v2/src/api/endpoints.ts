import axios, {AxiosResponse} from './axiosConfig';
// import {composeUrlStringFromObj} from '../helpers/libs/queryParams';

export const changeOrderTypeAPI = async (token: string, data: any): Promise<AxiosResponse> => {
    return axios({
        method: 'post',
        url: '/orders/change-type',
        data,
        headers: {authorization: token},
    });
};
