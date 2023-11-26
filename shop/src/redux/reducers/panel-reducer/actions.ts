import * as types from './types';

export const getTypes = (token: string) => {
  return {type: types.GET_TYPES_SAGA_REQUESTED, payload: token};
};
