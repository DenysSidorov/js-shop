require('dotenv').config();
var env = process.env.NODE_ENV || 'development';

if (env === 'development') {
  process.env.PORT = 3000;
  process.env.MONGODB_URI = 'mongodb://127.0.0.1:27017/TodoApp';
} else if (env === 'temp-test.tsx') {
  process.env.PORT = 3000;
  process.env.MONGODB_URI = 'mongodb://127.0.0.1:27017/TodoAppTest';
}
