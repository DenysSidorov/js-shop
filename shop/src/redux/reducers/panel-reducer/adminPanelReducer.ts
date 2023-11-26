import * as types from './types';
import {produce, Draft} from 'immer';

export type AdminPanelStateType = {
  new: 0;
  progress: 0;
  done: 0;
  delivery: 0;
  [key: string]: any;
};

export interface IAdminPanel {
  countTypes: AdminPanelStateType;
}

const initialState: IAdminPanel = {countTypes: {new: 0, progress: 0, done: 0, delivery: 0}};

const adminPanelReducer = produce((draft: Draft<IAdminPanel>, action: any): IAdminPanel | void => {
  switch (action.type) {
    case types.GET_TYPES: {
      const nullState: AdminPanelStateType = {new: 0, progress: 0, done: 0, delivery: 0};
      draft.countTypes = nullState;
      if (Array.isArray(action.payload)) {
        action.payload.forEach((el: any) => {
          draft.countTypes[el._id] = el.count;
        });
      }
    }
  }
}, initialState);

export default adminPanelReducer;
