import {authReducerIdentificator as identificator} from '../reducerIdentificators';

export const AUTH_USER: string = `${identificator}/AUTH_USER`;
export const UNAUTH_USER: string = `${identificator}/UNAUTH_USER`;
export const UNAUTH_USER_SAGA_REQUESTED: string = `${identificator}/UNAUTH_USER_SAGA_REQUESTED`;
export const AUTH_ERROR: string = `${identificator}/AUTH_ERROR`;
export const FETCH_MESSAGE: string = `${identificator}/FETCH_MESSAGE`;
export const DELETE_ERROR_MESSAGE: string = `${identificator}/DELETE_ERROR_MESSAGE` ;
export const APPEAR_LIKE_ADMIN: string = `${identificator}/APPEAR_LIKE_ADMIN`;
export const DISAPPEAR_LIKE_ADMIN: string = `${identificator}/DISAPPEAR_LIKE_ADMIN`;
export const SIGN_IN_SAGA_REQUESTED: string = `${identificator}/SIGN_IN_SAGA_REQUESTED`;
export const SIGN_UP_SAGA_REQUESTED: string = `${identificator}/SIGN_UP_SAGA_REQUESTED`;

