import {takeLatest, all, put, call, fork} from 'redux-saga/effects';
import {get} from 'lodash';
import {hideLoading, showLoading} from 'react-redux-loading-bar';
import {signInAPI, isAdminAPI, signUpAPI} from '../../../api/endpoints';
import {history} from '../../store/configureStore';
import * as types from './types';
import {authError} from './actions';

function* signInUserSaga(action: any) {
  yield put(showLoading());
  try {
    const response = yield call(signInAPI, action.payload.login, action.payload.password);
    if (response.status && response.status === 200) {
      yield put({type: types.AUTH_USER});
      yield call([localStorage, localStorage.setItem], 'info', response.data);
      yield put(hideLoading());
      yield call(history.push, '/shop');
      yield fork(isAdminSaga);
    } else {
      throw response;
    }
  } catch (err) {
    yield put(hideLoading());
    yield put(authError(get(err, 'response.data.message', 'Сервер недоступен')));
  }
}

export const signUpUserSaga = function* (action:any) {
  yield put(showLoading());

  try {
    const response = yield call(signUpAPI, action.payload.login, action.payload.password, action.payload.nick);
    if (response.status && response.status === 200) {
      yield put(hideLoading());
      yield call(history.push, {pathname: '/verify-email', state: response.data});
    } else {
      throw response;
    }
  } catch (err) {
    yield put(hideLoading());
    yield put(authError(get(err, 'response.data.message', 'Сервер недоступен')));
  }
};

function* isAdminSaga() {
  try {
    const token = yield call([localStorage, localStorage.getItem], 'info');
    const response = yield call(isAdminAPI, token);
    if (get(response, 'data.isadmin', null)) {
      yield put({type: types.APPEAR_LIKE_ADMIN});
      yield put({type: types.AUTH_USER});

    } else {
      yield put({type: types.UNAUTH_USER});
      yield put({type: types.DISAPPEAR_LIKE_ADMIN});
    }
  } catch (er) {
    console.log(er);
  }
}


export function* saveUserTokenSaga(action: any) {
  yield put({type: types.AUTH_USER});
  yield call([localStorage, localStorage.setItem], 'info', action.payload);
  yield call(history.push, '/shop');
}


function* signoutUserSaga() {
  yield call([localStorage, localStorage.removeItem], 'info');
  yield put({type: types.UNAUTH_USER});
}

export function* authSaga() {
  yield all([
    takeLatest(types.UNAUTH_USER_SAGA_REQUESTED, signoutUserSaga),
    takeLatest(types.SIGN_IN_SAGA_REQUESTED, signInUserSaga),
    takeLatest(types.SIGN_UP_SAGA_REQUESTED, signUpUserSaga),
    takeLatest(types.AUTH_USER_SAGA_REQUESTED, saveUserTokenSaga),
    takeLatest(types.APPEAR_LIKE_ADMIN_SAGA_REQUESTED, isAdminSaga)
  ]);
}
