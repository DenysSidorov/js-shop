import {Token} from '../../../interfaces';

export const defineSex = (sex: string) => sex === 'female'? 'Женщина' : 'Мужчина';

export const initialToken = (): Token => {
  try {
    return localStorage.getItem('info') || '';
  }catch (e) {
    return '';
  }
};
