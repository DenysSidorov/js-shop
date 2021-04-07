import {application} from './environment';
import Database from './environment/dbConnection';

function run() {
  new Database('MongoDB').connect(application);
}

run();
