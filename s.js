var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('Hello World222222!');
});
app.get('/test', function (req, res) {
    res.json({'json-api': true});
});

app.listen(process.env.PORT || 3000, function () {
    console.log('Example app listening on port 3000!');
});
console.log('jopa');