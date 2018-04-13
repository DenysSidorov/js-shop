let urlApi = process.env.NODE_ENV == 'development' ? `https://localhost:${process.env.APP_PORT}` : window.location.origin;
export default urlApi;