import  express from 'express';
let app = express();

app.get('/', function (req, res) {
    res.send('Hello World222222!');
});
app.get('/test', function (req, res) {
    res.json({'json-api': process.env.MONGODB_URI});
});

app.listen(process.env.PORT || 3000, function () {
    console.log('Example app listening on port 3000!');
});
console.log('jopa');
console.log(process.env.NODE_ENV, 'process.env.NODE_ENV');
console.log(process.env.MONGODB_URI, 'process.env.MONGODB_URI');
console.log(process.env.PORT, 'process.env.PORT');