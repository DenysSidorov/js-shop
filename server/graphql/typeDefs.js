const {gql} = require('apollo-server-express');

const typeDefs = gql`
    type Query {
        greet: String!
        getUser(token: String): User
    }

    type User {
        id:String!,
        login:String!,
        password:String!,
        nick:String!,
        isAdmin: Boolean!
    }`;

export default typeDefs;

// login: {type: String, unique: true, required: true, index: true},
// password: {type: String, required: true, minlength: 4},
// nick: {type: String, required: true, minlength: 4},
// isAdmin: {type: Boolean, default: false, required: true}
