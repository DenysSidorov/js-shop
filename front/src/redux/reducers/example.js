export const PRELOADER_ON_GET_DATA = 'preloader/PRELOADER_ON_GET_DATA';
export const PRELOADER_OFF_GET_DATA = 'preloader/PRELOADER_OFF_GET_DATA';

const initialState = false;

export default (state = initialState, action) => {
  switch (action.type) {
    case PRELOADER_ON_GET_DATA:
      return true;
    case PRELOADER_OFF_GET_DATA:
      return false;
    default:
      return state;
  }
};

export const changePreloaderState = (bool) => {
  if (bool === undefined) throw new Error('Preloader bool not defined');
  if (bool) {
    return {type: PRELOADER_ON_GET_DATA};
  }
  return {type: PRELOADER_OFF_GET_DATA};
};
