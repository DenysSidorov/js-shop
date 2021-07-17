import {AxiosRequestConfig, AxiosError} from 'axios';

export default {
    onFulfilled(request: AxiosRequestConfig) {
    // Do something before request is sent
        return request;
    },
    onRejected: (error: AxiosError) => {
    // Do something with request error
        return Promise.reject(error);
    },
};
