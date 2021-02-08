// https://www.apollographql.com/docs/apollo-server/data/data-sources/
import config from '../../config';

import {RESTDataSource} from 'apollo-datasource-rest';

class UsersAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = `${config.SERVER_DOMAIN}:${config.SERVER_PORT}`;
  }

  async getUser(token) {
    return await this.get('/api/users/current', {}, {headers: {authorization: token}});
  }

  async updateUser(token, body) {
    return await this.patch('/api/users/update', body, {headers: {authorization: token}});
  }
}

export default UsersAPI;
