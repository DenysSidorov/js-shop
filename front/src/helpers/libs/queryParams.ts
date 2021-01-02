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

export default params;
