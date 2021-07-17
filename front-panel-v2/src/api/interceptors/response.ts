import {AxiosResponse, AxiosError} from 'axios';

import exampleMiddleware from '../middlewares/example';

export default {
  onFulfilled(response: AxiosResponse) {
    return exampleMiddleware(response);
    // return response;
  },
  onRejected: (error: AxiosError) => {
    // Do something with response error
    return Promise.reject(error);
  },
};
