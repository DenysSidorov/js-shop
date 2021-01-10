const {gql} = require('apollo-server-express');

const typeDefs = gql`
    type Query {
        greet: String!,
        getUser(token: String): User
        userByIdFromREST(token: String): User
    }

    type Mutation {
        editUserByIdFromREST(token: String, data: EditUserInput): User
    }

    input EditUserInput {
        login: String,
        nick: String,
        phone: String,
        age: Int,
        isAdmin: Boolean,
        sex: AllowedSex
    }

    type User {
        _id:ID!,
        login:String!,
        password:String,
        nick:String!,
        isAdmin: Boolean!,
        age: Int,
        sex: AllowedSex,
        phone: String
    }

    enum AllowedSex {
        male
        female
    }
    
    type Comment {
      _id: ID!,
      message: String
    }
    
    type Good {
     _id: ID!,
    name: String,
    model: String,
    createdAt: String
    size: [Int]
    comments: [Comment],
    price: Int,
    photo: [String],
    code: String,
    descShort: String,
    descFull: String,
    tags: [String]
    sail: Int
    isNewGood: Boolean
    category: [String]
    isExists: Boolean
    producer: String
    views: Int
    }
`;

export default typeDefs;

