const { ApolloServer } = require('apollo-server-express');
import resolvers from './resolvers';
import typeDefs from './typeDefs';

export const serverApollo = new ApolloServer({
  typeDefs: typeDefs,
  resolvers: resolvers,
  context: async ({ req }) => {
    return {
      myProperty: true
    };
  },
});

// const app = express();
// server.applyMiddleware({ app });
// server.applyMiddleware({ app, path: '/graphql' });
