const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Event {
        id: String!
        title: String
        url: String
        people: [Person]
    }

    type Person {
        id: String
        firstName: String
        lastName: String
        email: String
    }

    type Query {
        allEvents(filter: String): [Event]
        event(id: String!): Event
    }

    type Mutation {
        renameEvent(id: ID!, title: String!): Event
    }
`;
