const express = require('express');

var app = express();

app.get('/', (req, res) => {
  res.status(404).send({
    error: 'Page not found.',
    name: 'Todo App v1.0'
  });
});

app.get('/users', (req, res) => {
  setTimeout(()=>{
    // Симмуляция похода в базу - грузный запрос =)))
    res.send([{name: 'Mike', age: 27}, {name: 'Andrew', age: 25}, {name: 'Jen', age: 26}]);
  }, 1800)

});

app.listen(3000);
/** Очень важно экспортировать экзепляр сервера APP*/
module.exports.app = app;
