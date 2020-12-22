import {hideLoading, showLoading} from 'react-redux-loading-bar';
import {takeLatest, put, call} from 'redux-saga/effects'
import * as types from './types';
import {getTypesAPI} from '../../../api/endpoints';

function* getTypes(action: any) {
  yield put(showLoading());
    try {
      const result = yield call(getTypesAPI, action.payload);
      yield put({type: types.GET_TYPES, payload: result.data});
      yield put(hideLoading());
    } catch (err) {
      yield put(hideLoading());
      console.log(err.message || err);
    }
}

export function* panelSaga() {
  yield takeLatest(types.GET_TYPES_SAGA_REQUESTED, getTypes);
}
