import User from '../models/user';

const resolvers = {
  Query: {
    greet: () => {
      return "Hello from GraphQl side"
    },
    getUser: (parent, args, context, info) => {
      // User.findOne({_id}, {password: 0});
      console.log('-----parent------');
      console.log(parent);
      console.log('-----args------');
      console.log(args);
      console.log('-----context------');
      console.log(context);
      console.log('-----info------');
      console.log(info);
      console.log('------end-----');
      return makeAsync({
        id: 'id',
        login: 'login',
        password: 'password2',
        nick: 'nick',
        isAdmin: false
      });

    }
  }
};

function makeAsync(data, timeout = 1000) {
  return new Promise((resolve) => setTimeout(() => resolve(data), timeout));
}

export default resolvers;
