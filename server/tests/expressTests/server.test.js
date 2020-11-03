const request = require('supertest');
const expect = require('expect');

/** Импортируем сервер*/
var app = require('./server').app;

it('should return hello world response', (done) => {
  request(app)
    .get('/') //тип запроса CRUD
    .expect(404) // Стату ответа
    // Так-же можно тестировать expect({age: 25}) или expect('Hello world')
    .expect((res) => { // ТЕСТИРУЕМ ОТВЕТ СЕРВЕРА !!!
      expect(res.body).toInclude({
        error: 'Page not found.'
      });
    })
    .end(done); // НУЖНО ОБЯЗАТЕЛЬНО ВЫЗВАТЬ DONE() ИНАЧЕ ВСЕ ТЕСТЫ БУДУТ ВЫПОЛНЕНЫ КАК УСПЕШНО ПРОЙДЕННЫЕ
});

// Make a new test
// assert 200
// Assert that you exist in users array
it('should return my user object', (done) => {
  request(app)
    .get('/users')
    .expect(200)
    .expect((res) => {
      expect(res.body).toInclude({
        name: 'Andrew',
        age: 25
      });
    })
    .end(done);
});
