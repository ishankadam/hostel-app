const { gql } = require("apollo-server");

const typeDefs = gql`
  type Location {
    id: ID!
    name: String!
    image: String
    hostelCount: Int!
  }

  type Hostel {
    id: String!
    name: String!
    image: String!
  }

  type LocationHostels {
    locationName: String!
    hostels: [Hostel!]!
  }

  type Query {
    locations: [Location!]!
    hostels(locationId: String!): LocationHostels!
  }
`;

module.exports = typeDefs;
