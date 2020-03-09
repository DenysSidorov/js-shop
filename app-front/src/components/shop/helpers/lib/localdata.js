/**
 * Module for work with LocalData (if it is available) or cookies (if LocalData isn't available)
 */
export default {

 /**
   * @description Check if storage is empty
   * @param {string} key
   */
 isEmptyStorage(key) {
  return !Boolean(this.getLocalData(key));
 },

 /**
   * @description Set data to local storage or cookies
   * @param {string} key
   * @param {string} value
   */
 setLocalData(key, value) {
  let date;
  let year;

  if (this.isLocalStorageAvailable()) {
   localStorage.setItem(key, value);
  } else {
   date = new Date();
   year = date.getFullYear();
   this.setCookie(key, value, { expires: date.setYear(year + 1), path: '/' });
  }
 },
 /**
   * @description Get local data from local storage or cookies
   * @param {string} key
   * @returns {string}
   */
 getLocalData(key) {
  let value;

  if (this.isLocalStorageAvailable()) {
   value = localStorage.getItem(key);
  } else {
   value = this.getCookie(key);
  }
  return value;
 },
 deleteLocalData(key) {
  if (this.isLocalStorageAvailable()) {
   localStorage.removeItem(key);
  } else {
   this.setCookie(key, null, { expires: -1 });
  }
 },
 /* Пример установки куки на год:
		   localdata.setCookie('nameCookie', 'value', {'expires': 31536000})*/
 setCookie(key, value, props, setRawValue) {
  props = props || {};
  let exp = props.expires;
  let d;
  let updatedCookie;
  let propKey;
  let propValue;

  if (typeof exp === 'number' && exp) {
   d = new Date();
   d.setTime(d.getTime() + exp * 1000);
   exp = props.expires = d;
  }
  if (exp && exp.toUTCString) {
   props.expires = exp.toUTCString();
  }
  if (!setRawValue) {
   value = encodeURIComponent(value);
  }
  updatedCookie = `${key  }=${  value}`;
  for (propKey in props) {
   if (props.hasOwnProperty(propKey)) {
    updatedCookie += `; ${  propKey}`;
    propValue = props[propKey];
    if (propValue !== true) {
     updatedCookie += `=${  propValue}`;
    }
   }
  }
  document.cookie = updatedCookie;
 },
 getCookie(key) {
  const matches = document.cookie
   .match(new RegExp(`(?:^|; )${  key
    .replace(/([\.$?*|{}\(\)\[\]\\\/\+\^])/g, '\\$1')  }=([^;]*)`));

  return matches ? decodeURIComponent(matches[1]) : undefined;
 },
 deleteCookie(key, path) {
  path = path || '/';
  this.setCookie(key, '', {
   path,
   expires: -1
  });
 },
 isLocalStorageAvailable() {
  try {
   localStorage.setItem('av-test', 1);
   localStorage.removeItem('av-test');
   return true;
  } catch (exception) {
   return false;
  }
 }
};
