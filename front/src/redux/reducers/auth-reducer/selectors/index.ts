import {createSelector} from 'reselect';
import {IReducersState} from '../../index';
import {selectState} from '../../service-app/selectors';
import {IAuthReducerState} from '../authReducer';

export const selectAuthReducer = createSelector(
  selectState,
  (state: IReducersState): IAuthReducerState => state.authReducer
);
//
// export const selectServiceNumber1 = createSelector(
//   selectServiceReducer,
//   (serviceSelector: IServiceReducer): string => serviceSelector.number1
// );
