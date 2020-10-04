export const CHANGE_NAME_CONFIRM = 'card-confirm/CHANGE_NAME_CONFIRM';

export type IConfirmsCard = string;

export default (state: IConfirmsCard = '', action: {type: string; payload: string}): IConfirmsCard => {
  switch (action.type) {
    case CHANGE_NAME_CONFIRM:
      return action.payload;
    default:
      return state;
  }
};

export const changeConfirm = (type: string): Object => {
  return {type: CHANGE_NAME_CONFIRM, payload: type};
};
