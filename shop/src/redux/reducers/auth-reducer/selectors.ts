// import {createSelector} from 'reselect';
import {IReducersState} from '../index';
import {selectState} from '../service-app/selectors';
import {IAuthReducerState} from './authReducer';

export const selectAuthReducer = (state: IReducersState): IAuthReducerState => selectState(state).authReducer;
