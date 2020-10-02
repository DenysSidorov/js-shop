import localdata from '../../../helpers/libs/localdata';
import {ICartReducerState} from './cartReducer';

export const setInLocalData = (items: any) => {
  try {
    localdata.setLocalData('cart', JSON.stringify(items));
  } catch (e) {
    console.log(e);
  }
};

export const getFromLocalData = (name: string): ICartReducerState => {
  try {
    const value = JSON.parse(String(localdata.getLocalData(name)));
    if (value) {
      return value;
    }
    return {items: []};
  } catch (e) {
    localdata.deleteLocalData(name);
    return {items: []};
  }
};

export default {};