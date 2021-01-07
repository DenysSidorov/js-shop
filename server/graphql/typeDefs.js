const {gql} = require('apollo-server-express');

const typeDefs = gql`
    type Query {
        greet: String!
        getUser(token: String): User
    }

    type User {
        _id:String!,
        login:String!,
        password:String,
        nick:String!,
        isAdmin: Boolean!
    }`;

export default typeDefs;
