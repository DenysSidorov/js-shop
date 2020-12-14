import {Action} from 'redux';
import {produce, Draft} from 'immer';

export const CHANGE_NAME_CONFIRM = 'card-confirm/CHANGE_NAME_CONFIRM';

export type IConfirmsCard = string;

interface IConfirmsCardAction extends Action {
  type: string;
  payload: string;
}

const initialState: IConfirmsCard = '';

const ConfirmInCartReducer = produce((draft: Draft<IConfirmsCard>, action: IConfirmsCardAction): IConfirmsCard | void=> {
  switch (action.type) {
    case CHANGE_NAME_CONFIRM:
      return action.payload;
  }
}, initialState);

export default ConfirmInCartReducer;

export const changeConfirm = (type: string): Object => {
  return {type: CHANGE_NAME_CONFIRM, payload: type};
};
