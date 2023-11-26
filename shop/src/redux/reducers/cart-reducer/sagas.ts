import {takeEvery, put} from 'redux-saga/effects';
import {ADD_ITEM_IN_CART, ADD_ITEM_IN_CART_SAGA_REQUESTED} from './types';
import {ICartReducerItem} from './cartReducer';
import {history} from '../../store/configureStore';
import {info} from 'react-notification-system-redux';

const _makeNotificationAboutNewGood = (item: ICartReducerItem) => {
  return {
    title: 'Товар добавлен в корзину',
    message: `${item.name} ${item.model}`,
    autoDismiss: 3,
    action: {
      label: 'В корзину',
      callback: () => history.push('/order'),
    },
    position: 'br',
  };
};

function* addItem(action: any) {
  const notification = _makeNotificationAboutNewGood(action.payload);

  try {
    // @ts-ignore
    yield put(info(notification));
    yield put({type: ADD_ITEM_IN_CART, payload: action.payload});
  } catch (e) {
    // yield put({type: TYPE_EXAMPLE, message: e.message});
  }
}

export function* cartSaga() {
  yield takeEvery(ADD_ITEM_IN_CART_SAGA_REQUESTED, addItem);
}
