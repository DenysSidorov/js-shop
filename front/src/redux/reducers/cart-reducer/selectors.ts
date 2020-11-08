import {createSelector} from 'reselect';
import {IReducersState} from '../index';
import {selectState} from '../service-app/selectors';
import {ICartReducerItem, ICartReducerState} from './cartReducer';

export const selectCartReducer = (state: IReducersState): ICartReducerState => selectState(state).cartReducer;

export const selectCartItems = createSelector(
  selectCartReducer,
  (cart: ICartReducerState): Array<ICartReducerItem> => cart.items
);
