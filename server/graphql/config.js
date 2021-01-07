import {ApolloServer} from 'apollo-server-express';
import resolvers from './resolvers';
import typeDefs from './typeDefs';

export const serverApollo = new ApolloServer({
  typeDefs: typeDefs,
  resolvers: resolvers,
  context: async ({req, res}) => {
    return {
      myProperty: true
    };
  },
});
