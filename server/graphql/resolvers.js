const resolvers = {
  Query: {
    greet: () => {
      return "Hello from GraphQl side"
    },
    getUser: (parent, args, context, info) => {
      return makeAsync({
        id: 'id',
        login: 'login',
        password: 'password',
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
