import mongoose from 'mongoose';
import config from '../config';

mongoose.Promise = require('bluebird'); // for async code, not callbacks

if (config.NODE_ENV === 'development') {
  // mongoose.set('debug', true);
}
export default class Database {
  constructor(dbName) {
    this.name = dbName;
    this.url = config.MONGODB_URI;
    this.parameters = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      // serverSelectionTimeoutMS: 30000
    };
  }


  connect(appRunCb) {
    if (config.NODE_ENV === 'development') {
      // mongoose.set('debug', true);
    }
    mongoose.connect(
      this.url,
      this.parameters,
      (err) => {
        if (err) {
          throw err;
        } else {
          console.log(`${this.name} connected!!!`);
          appRunCb();
        }
      }
    );
  }
}

