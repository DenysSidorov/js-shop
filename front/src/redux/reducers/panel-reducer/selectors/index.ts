// import {createSelector} from 'reselect';
import {IReducersState} from '../../index';
import {IAdminPanel} from '../adminPanelReducer';
import {selectState} from '../../service-app/selectors';

export const selectPanelReducer = (state: IReducersState): IAdminPanel => selectState(state).panelReducer;
