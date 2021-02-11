import ApolloClient from 'apollo-boost';
import { InMemoryCache } from 'apollo-cache-inmemory';
// import config from './config';

export const client = new ApolloClient<InMemoryCache>({
  uri: 'https://48p1r2roz4.sse.codesandbox.io',
  // uri: `${config.SERVER_DOMAIN}:${config.SERVER_PORT}/graphql`
});
