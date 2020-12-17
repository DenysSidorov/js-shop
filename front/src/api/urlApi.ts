import config from '../config';
import axios from './axiosConfig'

const urlApi: string =
  config.NODE_ENV === 'development' ? `http://127.0.0.1:${config.API_PORT}` : window.location.origin;
export default urlApi;

setTimeout(()=>{
  console.log(axios);
}, 99999999);
