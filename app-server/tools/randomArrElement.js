import randomNumber from './randomNumber';

export default (arr) => {
  if (!Array.isArray(arr)) throw new Error('This is not an Array');
  return arr.reduce((pre, cur, ind, a) => {
    return arr[randomNumber(0, arr.length - 1)];
  });
};
