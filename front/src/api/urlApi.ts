import config from '../config';

const urlApi: string =
  config.NODE_ENV === 'development' ? `http://127.0.0.1:${config.API_PORT}` : window.location.origin;
export default urlApi;
