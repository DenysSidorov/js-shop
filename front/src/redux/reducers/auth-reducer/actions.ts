import * as types from './types';

export function deleteErrorMessage() {
  return {type: types.DELETE_ERROR_MESSAGE};
}

export function authError(error: any) {
  return {type: types.AUTH_ERROR, payload: error};
}

export function isAdminFunc(token?: string | null) {
  return {type:types.APPEAR_LIKE_ADMIN_SAGA_REQUESTED, payload: token}
}

export function signinUser(login: string, password: string) {
  return {type: types.SIGN_IN_SAGA_REQUESTED, payload: {login, password}}
}

export type ISignUpFunction = (login: string, password: string, nick: string) => void;

export function saveUserToken(token: string) {
    return {type: types.AUTH_USER_SAGA_REQUESTED, payload: token}
}

export const signupUser: ISignUpFunction = function (login, password, nick) {
  return {type: types.SIGN_UP_SAGA_REQUESTED, payload: {login, password, nick}};
}

export function signoutUser() {
  return {type: types.UNAUTH_USER_SAGA_REQUESTED};
}
