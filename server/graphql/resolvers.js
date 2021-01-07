import User from '../models/user';
import mongoose from 'mongoose';
import getIdFromToken from './helpers/getIdFromToken';

const resolvers = {
  Query: {
    greet: () => {
      return "Hello from GraphQl side"
    },
    getUser: async (parent, args, context, info) => {
      const _id = await getIdFromToken(args.token);
      if (mongoose.Types.ObjectId.isValid(_id)){
        return User.findOne({_id}, {password: 0});
      } else {
        throw new Error('Token is not valid');
      }
    }
  }
};

// function makeAsync(data, timeout = 1000) {
//   return new Promise((resolve) => setTimeout(() => resolve(data), timeout));
// }

export default resolvers;
