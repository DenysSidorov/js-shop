// https://www.apollographql.com/docs/apollo-server/data/data-sources/
import config from '../../config';

import {RESTDataSource} from 'apollo-datasource-rest';

class UsersAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = config.NODE_ENV === 'development' ? `http://127.0.0.1:${config.PORT}` : `${config.SERVER_DOMAIN}:${config.PORT}`;
  }

  async getUser(token) {
    return await this.get('/api/users/current', {}, {headers: {authorization: token}});
  }
}

export default UsersAPI;
