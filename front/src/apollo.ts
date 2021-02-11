const ApolloClient = require('apollo-boost').default;
// // import config from './config';

export const client = new ApolloClient({
  uri: 'https://48p1r2roz4.sse.codesandbox.io',
  // uri: `${config.SERVER_DOMAIN}:${config.SERVER_PORT}/graphql`
});
