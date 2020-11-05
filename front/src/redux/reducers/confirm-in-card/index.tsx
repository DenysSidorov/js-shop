import {Action} from 'redux';

export const CHANGE_NAME_CONFIRM = 'card-confirm/CHANGE_NAME_CONFIRM';

export type IConfirmsCard = string;

interface IConfirmsCardAction extends Action {
  type: string;
  payload: string;
}

const ConfirmInCartReducer = (state: IConfirmsCard = '', action: IConfirmsCardAction): IConfirmsCard => {
  switch (action.type) {
    case CHANGE_NAME_CONFIRM:
      return action.payload;
    default:
      return state;
  }
};

export default ConfirmInCartReducer;

export const changeConfirm = (type: string): Object => {
  return {type: CHANGE_NAME_CONFIRM, payload: type};
};
