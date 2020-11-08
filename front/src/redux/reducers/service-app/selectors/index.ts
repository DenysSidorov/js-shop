import {createSelector} from 'reselect';
import {IServiceReducer} from '../index';
import {IReducersState} from '../../index';

export const selectState = (state: IReducersState): IReducersState => state;

export const selectServiceReducer = createSelector(
  selectState,
  (state: IReducersState): IServiceReducer => state.serviceReducer
);

export const selectServiceNumber1 = createSelector(
  selectServiceReducer,
  (serviceSelector: IServiceReducer): string => serviceSelector.number1
);
