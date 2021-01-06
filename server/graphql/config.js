const { ApolloServer } = require('apollo-server-express');
import resolvers from './resolvers';
import typeDefs from './typeDefs';

export const server = new ApolloServer({
  typeDefs: typeDefs,
  resolvers: resolvers
});

// const app = express();
// server.applyMiddleware({ app });
