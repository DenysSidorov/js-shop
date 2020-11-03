import {GET_TYPES} from './types';

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

export default function (state = initialState, action: any): IAdminPanel {
  switch (action.type) {
    case GET_TYPES: {
      const newState: IAdminPanel = {...state, countTypes: {...initialState.countTypes}};
      if (Array.isArray(action.payload)) {
        action.payload.forEach((el: any) => {
          newState.countTypes[el._id] = el.count;
        });
      }
      return newState;
    }
    default:
      return state;
  }
}
