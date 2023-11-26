import config from '../config';

const ApolloClient = require('apollo-boost').default;

export const client = new ApolloClient({
  uri: `${config.SERVER_DOMAIN}:${config.SERVER_PORT}/graphql`,
});

export const a = 6;
