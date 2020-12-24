import {takeLatest, all, put, call, fork} from 'redux-saga/effects';
import {get} from 'lodash';
import * as types from './types';
import {hideLoading, showLoading} from 'react-redux-loading-bar';
import {signIn, isAdmin} from '../../../api/endpoints';
import {history} from '../../store/configureStore';
import {APPEAR_LIKE_ADMIN, DISAPPEAR_LIKE_ADMIN} from './types';
import {authError} from './actions';

function* _isAdminSaga(token: string) {
  try {
    const response = yield call(isAdmin, token);
    if (response.data.isadmin) {
      yield put({type: APPEAR_LIKE_ADMIN});
    } else {
      yield put({type: DISAPPEAR_LIKE_ADMIN});
    }
  } catch (er) {
    console.log(er);
  }
}

function* signinUserSaga(action: any) {
  yield put(showLoading());
  try {
    const response = yield call(signIn, action.payload.login, action.payload.password);
    if (response.status && response.status === 200) {
      yield put({type: types.AUTH_USER});
      yield call([localStorage, localStorage.setItem], 'info', response.data);
      yield put(showLoading());
      yield call(history.push, '/shop');
      yield fork(_isAdminSaga, response.data);
    } else {
      throw response;
    }
  } catch (err) {
    yield put(hideLoading());
    yield put(authError(get(err, 'response.data.message', 'Сервер недоступен')));
  }
}


function* signoutUserSaga() {
  yield call([localStorage, localStorage.removeItem], 'info');
  yield put({type: types.UNAUTH_USER});
}

export function* authSaga() {
  yield all([
    takeLatest(types.UNAUTH_USER_SAGA_REQUESTED, signoutUserSaga),
    takeLatest(types.SIGN_IN_SAGA_REQUESTED, signinUserSaga)
  ]);
}
