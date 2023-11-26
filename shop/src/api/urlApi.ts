import config from '../config';

const urlApi: string =
  config.NODE_ENV === 'development' ? `${config.SERVER_DOMAIN}:${config.SERVER_PORT}` : window.location.origin;
export default urlApi;
