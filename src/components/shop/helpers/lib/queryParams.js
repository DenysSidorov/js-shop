var params = function(locationSearch) {

    var result = locationSearch.replace('?', '')
        .split('&')
        .reduce(
            function (p, e) {
                var a = e.split('=');
                p[decodeURIComponent(a[0])] = decodeURIComponent(a[1]);
                return p;
            },
            {}
        );
    console.log(locationSearch, result, 'locationSearch');
    return result;
};

export default params;