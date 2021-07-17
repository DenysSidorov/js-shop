const params = function (locationSearch: string) {
  const result = locationSearch
    .replace('?', '')
    .split('&')
    .reduce(function (p: any, e: string) {
      const a = e.split('=');
      const newP = p;
      newP[decodeURIComponent(a[0])] = decodeURIComponent(a[1]);
      return p;
    }, {});
  // console.log(result, 'locationSearch');
  delete result[''];
  return result;
};

export const composeUrlStringFromObj = (obj: any) => {
  if (Object.keys(obj).length === 0) return '';

  let result = decodeURIComponent(
    Object.keys(obj).reduce((prev, cur) => {
      if (obj[cur] === undefined || obj[cur] === null || obj[cur] === '') {
        return prev;
      }
      return `${prev}&${cur}=${obj[cur]}`;
    }, ''),
  );

  if (result) {
    result = `?${result.slice(1)}`;
  }
  return result;
};

export default params;
