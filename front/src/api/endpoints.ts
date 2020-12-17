import axios, {apiBaseURL} from './axiosConfig';

setTimeout( function badExample() {
  console.log(axios, apiBaseURL);
}, 99999999);

