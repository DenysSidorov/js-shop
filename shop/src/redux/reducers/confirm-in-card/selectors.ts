// import {createSelector} from 'reselect';
import {IConfirmsCard} from './index';
import {IReducersState} from '../index';
import {selectState} from '../service-app/selectors';

export const selectConfirmReducer = (state: IReducersState): IConfirmsCard => selectState(state).confirmsCard;
