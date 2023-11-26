import {hideLoading, showLoading} from 'react-redux-loading-bar';
import {takeLatest, put, call} from 'redux-saga/effects';
import * as types from './types';
import {getTypesAPI} from '../../../api/endpoints';
import {ResponseGenerator} from '../../../types/types';

function* getTypes(action: any) {
  yield put(showLoading());
  try {
    const response: ResponseGenerator = yield call(getTypesAPI, action.payload);
    if (response.status && response.status === 200) {
      yield put({type: types.GET_TYPES, payload: response.data});
      yield put(hideLoading());
    } else {
      throw response;
    }
  } catch (err: any) {
    yield put(hideLoading());
    console.log(err ? err.message : '');
  }
}

export function* panelSaga() {
  yield takeLatest(types.GET_TYPES_SAGA_REQUESTED, getTypes);
}
