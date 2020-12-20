import {spawn} from 'redux-saga/effects';
import {cartSaga} from '../reducers/cart-reducer/sagas';


/**
 spawn is an effect that will disconnect your child saga from its parent,
 allowing it to fail without crashing its parent.
 This simply means that even if one saga were to fail,
 the rootSaga and other sagas will not be killed.
 */
export default function* rootSaga() {
  yield spawn(cartSaga);
  // yield spawn(saga2)
  // yield spawn(saga3)
}
