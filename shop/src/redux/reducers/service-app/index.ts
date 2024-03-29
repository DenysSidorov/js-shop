// @ts-nocheck
import {produce, Draft} from 'immer';

export interface IServiceReducer {
  number1: string;
  email1?: string;
}

const initialState: IServiceReducer = {
  number1: '093-687-76-13',
  email1: 'doshki.craft@gmail.com',
};

export default produce((draft: Draft<IServiceReducer> /* ,action */): IServiceReducer | void => {}, initialState);
