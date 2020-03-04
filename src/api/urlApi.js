require('dotenv').config();
let urlApi = process.env.NODE_ENV == 'development' ? `http://127.0.0.1:${process.env.APP_PORT}` : window.location.origin;
export default urlApi;
