const ApolloClient = require('apollo-boost').default;
import config from '../config';

export const client = new ApolloClient({
  uri: `${config.SERVER_DOMAIN}:${config.SERVER_PORT}/graphql`
});
