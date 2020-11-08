import {createSelector} from 'reselect';
import {IServiceReducer} from '../index';
import {IReducersState} from '../../index';

export const selectState = (state: IReducersState): IReducersState => state;

export const selectServiceReducer = (state: IReducersState): IServiceReducer => selectState(state).serviceReducer;

export const selectServiceNumber1 = createSelector(
  selectServiceReducer,
  (serviceSelector: IServiceReducer): string => serviceSelector.number1
);
